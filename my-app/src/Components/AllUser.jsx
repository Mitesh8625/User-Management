import users from "./User";
import SingleUser from "./SingleUser";
import { useState } from "react";

const AllUser = () => {
    const [emp, setEmp] = useState([]);
    const [showemp, setShowemp] = useState(false);

    const addEmp = () => {
        setEmp(users);
        setShowemp(true);
    }
    const deletAllUser = () => {
        setEmp([]);
        setShowemp(false);
    }
    const deletUser = (id) => {
        const updateEmp = emp.filter(e => e.id !== id);
        setEmp(updateEmp);
        if (updateEmp.length === 0) {
            setShowemp(false);[]
        }
    }
    return (
        <>
            <div>
                <h1> Employees Data</h1>
                {!showemp && (
                    <button onClick={addEmp}>Add Emp</button>
                )}
                {
                    showemp && (
                        <table border={1} cellPadding={10} cellSpacing={8}>
                            <tbody>{emp.map(e => (
                                <SingleUser key={e.id} user={e} deleteUser={deletUser} />
                            ))}</tbody>
                        </table>
                    )
                }
                {showemp && (
                    <button onClick={deletAllUser}>Delet All Emp</button>
                )}
            </div>
        </>

    )
}
export default AllUser;