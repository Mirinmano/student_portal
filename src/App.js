import { Route, Routes, useNavigate } from 'react-router-dom';
import CourceCertificate from './CourceCertificate';
import Header from './Header';
import Body from './Body';
import Upload from './Upload';
import EventCertificate from './EventCertificate'
import InternCertificate from './InternCertificate'
import SemesterCards from './SemesterCards';
import { useEffect, useState } from 'react';
import Profile from './Profile';

function App() {
  const [addTitle, setAddTitle] = useState('');
  const [addPaid, setAddPaid] = useState('');
  const [addCompany, setAddCompany] = useState('');
  const [addCategory, setAddCategory] = useState('');
  const [addSemester, setAddSemester] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [submissions, setSubmissions] = useState(() => {
    const savedCertificates = JSON.parse(localStorage.getItem('certificates'));
    return savedCertificates || [
      {
        id: 1,
        category: "Course",
        company: "Dhuddu",
        imageUrl: "blob:http://localhost:3000/aef7ea8e-bfb3-4749-a31a-c23be754b913",
        payment: "Free",
        semester: "5",
        title: "React JS"
      }
    ];
  });

  useEffect(() => {
    // Save to local storage whenever `submissions` changes
    localStorage.setItem("certificates", JSON.stringify(submissions));
  }, [submissions]);
 
  const handleChange = (e) => {
    if (e.target.name === 'certificateImg') {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile); 

      const newSubmission = {
        id : (submissions.length)?submissions[submissions.length-1].id+1:1,
        title: addTitle,
        payment: addPaid,
        company: addCompany,
        category: addCategory,
        semester: addSemester,
        imageUrl: imageUrl
      };
      const newList = [...submissions, newSubmission]
      await setSubmissions(newList);
      // Clear form fields
      setAddTitle('');
      setAddPaid('');
      setAddCompany('');
      setAddCategory('');
      setAddSemester('');
      setImageFile(null);
    }
    console.log(submissions)
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/home' element={<Body />} />
        <Route path='/eventcertificate' element={<EventCertificate 
          submissions = {submissions}
        />} />
        <Route path='/interncertificate' element={<InternCertificate 
          submissions = {submissions}
        />} />
        <Route path='/course' element={<CourceCertificate 
          submissions={submissions}
        />} />
        <Route path='/upload' element={<Upload 
          addTitle = {addTitle}
           setAddTitle = {setAddTitle}
           addPaid = {addPaid}
          setAddPaid = {setAddPaid}
          addCompany = {addCompany} 
          setAddCompany = {setAddCompany}
          addCategory = {addCategory}
          setAddCategory = {setAddCategory}
          addSemester = {addSemester}
          setAddSemester = {setAddSemester}
          handleChange = {handleChange}
          handleSubmit = {handleSubmit}
        />} />
        <Route path='/academic' element={<SemesterCards />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
