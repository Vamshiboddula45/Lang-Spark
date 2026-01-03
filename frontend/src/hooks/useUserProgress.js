import { useState, useEffect } from 'react';
import api from '../api/client';
import { useAuth } from '@/contexts/AuthContext';

export function useUserProgress() {
  const { user } = useAuth();
  const [languageProgress, setLanguageProgress] = useState({});
  const [loading, setLoading] = useState(true);

  // Load progress
  useEffect(() => {
    if (!user) {
      setLanguageProgress({});
      setLoading(false);
      return;
    }

    const fetchProgress = async () => {
      try {
        const { data } = await api.get('/progress');
        // Backend returns single progress object or list. 
        // Based on my backend implementation, it returns a single object { language: 'es', xp: ... }
        // The frontend expects a map keyed by language code.

        // Handle if data is array or object
        const progressList = Array.isArray(data) ? data : [data];

        const progressMap = {};
        progressList.forEach(p => {
          if (p && p.language) {
            progressMap[p.language] = {
              languageCode: p.language,
              xp: p.xp,
              streak: p.streak,
              level: 1, // calculate based on xp if needed
              lessonsCompleted: p.lessonsCompleted,
              completedLessons: p.completedLessons || [],
              lastActivityDate: p.lastLessonDate
            };
          }
        });

        setLanguageProgress(progressMap);
      } catch (error) {
        console.error('Error fetching progress:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [user]);

  const getProgress = (languageCode) => {
    return languageProgress[languageCode] || {
      xp: 0,
      streak: 0,
      level: 1,
      lessonsCompleted: 0,
      completedLessons: [],
      lastActivityDate: null
    };
  };

  const saveProgress = async (languageCode, progressUpdates) => {
    try {
      const { data } = await api.post('/progress/update', {
        xp: progressUpdates.xp,
        lessonsCompleted: progressUpdates.lessonsCompleted,
        completedLessons: progressUpdates.completedLessons, // Send array
        language: languageCode
      });

      setLanguageProgress(prev => ({
        ...prev,
        [languageCode]: {
          ...prev[languageCode],
          ...progressUpdates,
          xp: data.xp,
          streak: data.streak,
          lessonsCompleted: data.lessonsCompleted,
          completedLessons: data.completedLessons || prev[languageCode].completedLessons // Update array
        }
      }));
    } catch (error) {
      console.error("Failed to save progress", error);
    }
  };

  const getLanguagesWithProgress = () => {
    return Object.keys(languageProgress);
  };

  return {
    languageProgress,
    loading,
    getProgress,
    saveProgress,
    getLanguagesWithProgress,
  };
}
