import React, {useState} from "react";

import '../style/generation.css'

export const Generation = () => {

    const [input,setInput]= useState('');
    const [qeCode,setQrCode] = useState('');
    const [load,setLoad] = useState(false);

    return <>
        <form className='generation__from'>
            <h1 className='generation__title'>QR Code</h1>
            <input
                type="text"
                className='generation__input'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
                placeholder='URL'
            />
            {load && <div className='generation__load'><span></span>Loading</div>}

            {
                !load && (qeCode ? <img className="generation__img" src={qeCode} alt='QRCode'/>
                    : <div className='generation__load'>We use ads to keep our content free for you.</div>)
            }
            <input type="submit" className='generation__submit' value='Generate QR Code'/>
        </form>
    </>
}