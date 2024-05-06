
export default function empByDepart(props) {
    return (
        <div>
            <table>
                <tr>
                    <td>{props.empId}</td>
                    <th>{props.empName}</th>
                    <th>{props.salary}</th>
                    <th>{props.department}</th>
                </tr>
            </table>
        </div>
    )
}