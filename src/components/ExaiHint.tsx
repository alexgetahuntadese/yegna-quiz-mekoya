import React, { useMemo, useState } from 'react';
import { Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Question } from '@/data/types';
import { generateExaiHint } from '@/services/exaiHint';

interface ExaiHintProps {
  question: Question;
  onRequested?: (level: number) => void;
}

const ExaiHint: React.FC<ExaiHintProps> = ({ question, onRequested }) => {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState<1 | 2>(1);

  const hint = useMemo(() => {
    try {
      return generateExaiHint(question, level);
    } catch (e) {
      return {
        title: 'Hint unavailable',
        bullets: ['We could not generate a hint for this question. Try focusing on the key terms and eliminating conflicting options.']
      };
    }
  }, [question, level]);

  const handleOpen = () => {
    setOpen(v => !v);
    if (!open) onRequested?.(level);
  };

  const handleMore = () => {
    if (level === 1) {
      setLevel(2);
      onRequested?.(2);
    }
  };

  return (
    <div className="mb-4">
      <Button
        variant="secondary"
        size="sm"
        onClick={handleOpen}
        aria-expanded={open}
        className="gap-2"
      >
        <Lightbulb className="w-4 h-4" />
        Exai Hint
      </Button>

      {open && (
        <Card className="mt-3">
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4" />
              <p className="font-medium text-sm">{hint.title}</p>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {hint.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            {hint.example && (
              <p className="text-sm mt-3 italic">{hint.example}</p>
            )}
            {level === 1 && (
              <div className="mt-4">
                <Button variant="outline" size="sm" onClick={handleMore}>
                  More hint
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ExaiHint;
