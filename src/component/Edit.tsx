import React, { FC, useState,FormEvent,Dispatch,SetStateAction } from 'react'
import { FaUserEdit } from 'react-icons/fa'
import { Modal } from "react-bootstrap";
import { Ipeople } from '../App';



interface Iprops {
    people: Ipeople;
    peoples: Ipeople[];
    setPeoples: Dispatch<SetStateAction<Ipeople[]>>
}


const Edit: FC<Iprops> = ({ people ,peoples,setPeoples }) => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false)
    const [fullName, setFullName] = useState<string>(people.fullName)
    const [age, setAge] = useState<string | number>(people.age);
    const [img_url, setImg_url] = useState<string>(people.img_url);
    const [bio, setBio] = useState<string | undefined>(people.bio);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!fullName) {
            return alert("نام و نام خانوادگی الزامی می باشد")
        }
        if (!age) {
            return alert(" سن الزامی می باشد")
        }
        if (!img_url) {
            return alert("آدرس تصویر الزامی می باشد")
        }



        const persons = [...peoples];
        const index : number = persons.findIndex((p) => p.id === people.id);
        persons[index] = {
            id : people.id,
            fullName,
            age: Number(age),
            img_url,
            bio,
        };
        setPeoples(persons)
        setIsShowModal(false)
    };
    
    return (
        <div>
            <FaUserEdit className='text-primary m-1' size={30} onClick={() => setIsShowModal(true)} />

            <Modal size="lg" show={isShowModal} onHide={() => setIsShowModal(false)} centered>
                <Modal.Header>
                    <Modal.Title>{people.fullName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        // onSubmit={(e) => handleSubmit(e)}
                        autoComplete="off"
                        className="mt-3"
                    >
                        <input
                            type="text"
                            className="form-control mb-2"
                            name="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="نام و نام خانوادگی"
                        />
                        <input
                            type="number"
                            className="form-control mb-2"
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="سن"
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            name="img_url"
                            value={img_url}
                            onChange={(e) => setImg_url(e.target.value)}

                            placeholder="آدرس تصویر پروفایل"
                        />
                        <textarea
                            className="form-control mb-2"
                            name="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            rows={7}
                            placeholder="بیوگرافی"
                        />
                        <button type="submit" className="btn btn-success">
                            ویرایش شخص
                        </button>
                        <button type="submit" className="btn btn-success me-2" onClick={() => setIsShowModal(false)}>
                        بستن
                        </button>
                    </form>
                </Modal.Body >
            </Modal>
        </div>
    )
}

export default Edit
