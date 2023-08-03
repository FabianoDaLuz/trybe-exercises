function luckyNumber() {
    function randomNumber() {
        return Math.floor(Math.random() * 60 + 1);
    }
}
return (
    <div>
        <ul>
            <li>{randomNumber()}</li>
            <li>{luckyNumber()}</li>
            <li>{luckyNumber()}</li>
            <li>{luckyNumber()}</li>
            <li>{luckyNumber()}</li>
            <li>{luckyNumber()}</li>
            <li>{luckyNumber()}</li>
        </ul>

    </div>
)



export default luckyNumber;