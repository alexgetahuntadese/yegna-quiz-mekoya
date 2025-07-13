import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Trophy, Zap, Settings, LogOut } from 'lucide-react';
import { AuthContext } from '@/App';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  console.log('Index component rendering');
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const { toast } = useToast();
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const grades = [
    {
      id: 'grade9',
      title: 'Grade 9',
      description: 'Foundation level quizzes',
      icon: '📚',
      color: 'from-green-400 to-blue-500',
      subjects: ['Mathematics', 'English', 'Science', 'Social Studies']
    },
    {
      id: 'grade10', 
      title: 'Grade 10',
      description: 'Intermediate level challenges',
      icon: '🎯',
      color: 'from-blue-400 to-purple-500',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology']
    },
    {
      id: 'grade11',
      title: 'Grade 11', 
      description: 'Advanced preparation',
      icon: '🚀',
      color: 'from-purple-400 to-pink-500',
      subjects: ['Advanced Math', 'Sciences', 'Languages', 'Social Sciences']
    },
    {
      id: 'grade12',
      title: 'Grade 12',
      description: 'University preparation',
      icon: '🎓',
      color: 'from-pink-400 to-red-500',
      subjects: ['Calculus', 'Advanced Sciences', 'Literature', 'Economics']
    }
  ];

  const handleGradeSelect = (gradeId: string) => {
    console.log('Grade selected:', gradeId);
    if (gradeId === 'grade12') {
      navigate('/grade-12');
    } else {
      navigate(`/${gradeId}`);
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  QuizPlatform
                </h1>
                <p className="text-sm text-gray-600">Personalized Learning Experience</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="flex items-center space-x-2"
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="flex items-center space-x-2 text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to QuizPlatform! 🎉
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your grade level to explore subjects and test your knowledge.
          </p>
        </div>

        {/* Grade Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Choose Your Grade Level</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {grades.map((grade, index) => (
              <Card 
                key={grade.id}
                className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-white/70 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleGradeSelect(grade.id)}
              >
                <CardHeader className={`bg-gradient-to-r ${grade.color} text-white rounded-t-lg`}>
                  <div className="text-center">
                    <div className="text-4xl mb-2">{grade.icon}</div>
                    <CardTitle className="text-xl">{grade.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-center mb-4 text-gray-600">
                    {grade.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {grade.subjects.slice(0, 3).map((subject) => (
                      <Badge key={subject} variant="secondary" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                    {grade.subjects.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{grade.subjects.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-6 border-0 bg-white/70 backdrop-blur-sm animate-fade-in">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
            <p className="text-gray-600">Adaptive quizzes that match your learning style and pace</p>
          </Card>
          
          <Card className="text-center p-6 border-0 bg-white/70 backdrop-blur-sm animate-fade-in">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600">Monitor your improvement and celebrate achievements</p>
          </Card>
          
          <Card className="text-center p-6 border-0 bg-white/70 backdrop-blur-sm animate-fade-in">
            <Zap className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Interactive Experience</h3>
            <p className="text-gray-600">Engaging animations and immediate feedback</p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
