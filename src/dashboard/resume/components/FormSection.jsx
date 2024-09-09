import React, { useState, useContext } from 'react';
import PersonalDetail from './forms/PersonalDetail';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import Summery from './forms/Summery';
import Experience from './forms/Experience';
import Education from './forms/Education';
import Skills from './forms/Skills';
import { Link, Navigate, useParams } from 'react-router-dom';
import ThemeColor from './ThemeColor';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(true);
  const { resumeId } = useParams();
  const { resumeInfo } = useContext(ResumeInfoContext);

  console.log("Resume Info in FormSection:", resumeInfo); // Debugging

  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-5'>
          <Link to={"/dashboard"}>
            <Button><Home /></Button>
          </Link>
          <ThemeColor />
        </div>
        <div className='flex gap-2'>
          {activeFormIndex > 1 && (
            <Button size="sm" onClick={() => setActiveFormIndex(activeFormIndex - 1)}>
              <ArrowLeft />
            </Button>
          )}
          <Button
            disabled={!enableNext}
            className="flex gap-2"
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Conditional Rendering */}
      {activeFormIndex === 1 && (
        <PersonalDetail enabledNext={(v) => setEnableNext(v)} />
      )}
      {activeFormIndex === 2 && (
        <Summery enabledNext={(v) => setEnableNext(v)} />
      )}
      {activeFormIndex === 3 && <Experience />}
      {activeFormIndex === 4 && <Education />}
      {activeFormIndex === 5 && <Skills />}
      {activeFormIndex === 6 && <Navigate to={`/my-resume/${resumeId}/view`} />}
    </div>
  );
}

export default FormSection;
