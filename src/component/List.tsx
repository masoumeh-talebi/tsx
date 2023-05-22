import React, { FC, Dispatch, SetStateAction } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Ipeople } from './../App'
import Edit from './Edit'

interface Iprops {
    peoples: Ipeople[];
    setPeoples: Dispatch<SetStateAction<Ipeople[]>>,
}



const List: FC<Iprops> = ({ peoples, setPeoples }) => {
    const handleDeletePeople = (id: number): void => {
        const persons: Ipeople[] = [...peoples];
        const filtredPeople = persons.filter((p) => p.id !== id);
        setPeoples(filtredPeople)
    };

    const renderList: JSX.Element[] = peoples.map((people) => (
        <div key={people.id} className='col-12 col-lg-6'>
            <div className="card">
                <div className="card-body d-flex align-items-center">
                    <img className='img-fluid rounded img-thumpnail' width={100} height={100} src={people.img_url} alt={people.fullName} />
                    <div className="me-3">
                        <p>
                            <span className='h2'>{people.fullName}</span>
                            <span className='me-3 bg-primary badge'>{people.age} سال</span>
                        </p>
                        <p className='text-muted'>
                            {people.bio}
                        </p>
                    </div>
                </div>
                <div className='opration-btns'>
                    <Edit people={people} peoples={peoples} setPeoples={setPeoples}/>
                    <FaTrash className='text-danger m-1' size={30} onClick={() => handleDeletePeople(people.id)} />
                </div>
            </div>
        </div>
    ))
    return (
        <div className='row'>
            {renderList}
        </div>
    )
}

export default List;
