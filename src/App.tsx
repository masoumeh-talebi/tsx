import React, { useState } from 'react';
import './App.css';
import List from './component/List';
import AddPeople from './component/AddPeople';
import Edit from './component/Edit';

export interface Ipeople {
    id: number;
    fullName: string;
    age: number;
    img_url: string;
    bio?: string
}

function App() {
  const [peoples, setPeoples] = useState<Ipeople[]>([{
    id: 1,
    fullName: "sara",
    age: 20,
    img_url: "https://arga-mag.com/file/img/2022/09/Sunflower-photo-for-profile-31.jpg",
    bio: "web disiner"
  }])

  return (
    <div className="container">
      <h4 className='alert alert-info'>
        مدیریت اشخاص
      </h4>
      <List peoples={peoples} setPeoples={setPeoples}/>
      <AddPeople peoples={peoples} setPeoples={setPeoples}/>
    </div>
  );
}

export default App;