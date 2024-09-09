import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import GlobalApi from './../../../../../service/GlobalApi';

function EditResume() {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState(null);

  useEffect(() => {
    if (resumeId) {
      GetResumeInfo();
    }
  }, [resumeId]);

  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeId).then(resp => {
      setResumeInfo(resp.data.data);
    }).catch(error => {
      console.error("Failed to fetch resume info:", error);
    });
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        <FormSection />
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;
