import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions } from './data/questions';
import { Answer, PersonalityResult } from './types';
import { analyzePersonality } from './services/geminiService';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { ChevronRight, RefreshCcw, Skull } from 'lucide-react';
import { cn } from './lib/utils';

type Step = 'home' | 'quiz' | 'loading' | 'result';

export default function App() {
  const [step, setStep] = useState<Step>('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<PersonalityResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleStart = () => {
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
    setError(null);
  };

  const handleAnswer = async (optionIndex: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options[optionIndex];
    
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      selectedText: selectedOption.text,
      score: selectedOption.score,
    };
    
    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep('loading');
      
      const finalScores: Record<string, number> = {
        P: 0, R: 0, F: 0, I: 0, D: 0, A: 0, S: 0, X: 0, E: 0, G: 0
      };
      
      newAnswers.forEach(ans => {
        for (const [key, value] of Object.entries(ans.score)) {
          finalScores[key] += value as number;
        }
      });

      const code = [
        finalScores.P >= finalScores.R ? 'P' : 'R',
        finalScores.F >= finalScores.I ? 'F' : 'I',
        finalScores.D >= finalScores.A ? 'D' : 'A',
        finalScores.S >= finalScores.X ? 'S' : 'X',
        finalScores.E >= finalScores.G ? 'E' : 'G',
      ].join('-');

      try {
        const res = await analyzePersonality(finalScores, code);
        setResult(res);
        setStep('result');
      } catch (err) {
        console.error(err);
        setError('分析引擎似乎被你的人性吓坏了，请重试。');
        setStep('home');
      }
    }
  };

  function formatRadarData(scores: Record<string, number>) {
    return [
      { subject: '现实(P)', A: scores['P'] || 0, fullMark: 60 },
      { subject: '融合(F)', A: scores['F'] || 0, fullMark: 60 },
      { subject: '主导(D)', A: scores['D'] || 0, fullMark: 60 },
      { subject: '探索(X)', A: scores['X'] || 0, fullMark: 60 },
      { subject: '自我(E)', A: scores['E'] || 0, fullMark: 60 },
    ];
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-white/20 flex flex-col overflow-x-hidden">
      <main className="flex-1 flex flex-col items-center justify-center p-6 max-w-3xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {step === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8 w-full"
            >
              <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-4">
                <Skull className="w-12 h-12 text-white/80" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                32种婚恋人格底层逻辑测试
              </h1>
              <p className="text-lg text-white/50 max-w-md mx-auto leading-relaxed">
                抛开伪善的浪漫主义，用最冰冷的维度，解剖你在亲密关系中的真实算计与底牌。
              </p>
              
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                onClick={handleStart}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-medium tracking-wide text-black bg-white rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  开始直面人性
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          )}

          {step === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-xl"
            >
              {/* Progress Bar */}
              <div className="mb-12 space-y-4">
                <div className="flex justify-between text-xs font-mono text-white/40 uppercase tracking-widest">
                  <span>Question {currentQuestionIndex + 1}</span>
                  <span>{questions.length}</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white"
                    initial={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
                    animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-medium leading-snug text-white">
                  {questions[currentQuestionIndex].text}
                </h2>
                
                <div className="space-y-4">
                  {questions[currentQuestionIndex].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className={cn(
                        "w-full text-left p-5 rounded-2xl border border-white/10 bg-white/5",
                        "hover:bg-white/10 hover:border-white/20 transition-all duration-200",
                        "active:scale-[0.98] group flex items-center gap-4"
                      )}
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-sm font-mono text-white/50 group-hover:border-white/50 group-hover:text-white transition-colors">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-base md:text-lg text-white/80 group-hover:text-white transition-colors">
                        {option.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-6 w-full"
            >
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 border-t-2 border-white/20 rounded-full animate-spin" />
                <div className="absolute inset-2 border-r-2 border-white/40 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
                <div className="absolute inset-4 border-b-2 border-white/60 rounded-full animate-spin" style={{ animationDuration: '2s' }} />
                <Skull className="absolute inset-0 m-auto w-6 h-6 text-white/50 animate-pulse" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-white">正在生成人格侧写</h3>
                <p className="text-sm font-mono text-white/40 uppercase tracking-widest animate-pulse">
                  Analyzing underlying logic...
                </p>
              </div>
            </motion.div>
          )}

          {step === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-2xl space-y-12 py-8"
            >
              {/* Header */}
              <div className="text-center space-y-4">
                <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-white/60 tracking-widest mb-4">
                  {result.personality_code}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  {result.personality_type}
                </h1>
              </div>

              {/* Radar Chart */}
              <div className="h-[300px] md:h-[400px] w-full bg-white/[0.02] rounded-3xl border border-white/5 p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formatRadarData(result.dimension_scores)}>
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12, fontFamily: 'monospace' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 60]} tick={false} axisLine={false} />
                    <Radar
                      name="Score"
                      dataKey="A"
                      stroke="#fff"
                      strokeWidth={2}
                      fill="#fff"
                      fillOpacity={0.1}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Zha Xin Summary */}
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-white/20" />
                <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4">
                  // 核心诊断
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-white/90 font-medium">
                  "{result.zha_xin_summary}"
                </p>
              </div>

              {/* Recommendations */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-green-500/5 border border-green-500/10">
                  <h3 className="text-sm font-mono text-green-400/60 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                    天选猎物/盟友
                  </h3>
                  <ul className="space-y-2">
                    {result.match_recommendation.map((match, i) => (
                      <li key={i} className="text-white/80">{match}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-3xl bg-red-500/5 border border-red-500/10">
                  <h3 className="text-sm font-mono text-red-400/60 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                    致命天敌
                  </h3>
                  <ul className="space-y-2">
                    {result.avoid_warning.map((avoid, i) => (
                      <li key={i} className="text-white/80">{avoid}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Restart */}
              <div className="pt-8 text-center">
                <button
                  onClick={handleStart}
                  className="inline-flex items-center gap-2 text-sm font-mono text-white/40 hover:text-white transition-colors"
                >
                  <RefreshCcw className="w-4 h-4" />
                  重新测试
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
