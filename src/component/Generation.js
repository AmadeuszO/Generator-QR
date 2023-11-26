import React, {useState} from "react";

import '../style/generation.css'

export const Generation = () => {

    const [input, setInput] = useState('');
    const [codeQr, setCodeQr] = useState();
    const [load, setLoad] = useState(false);

    const generationQr = async (e) => {
        e.preventDefault()

        try {
            setLoad(true)
            const resp = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`);
            setCodeQr(resp.url)
        } catch (err) {
            console.log(err)
        } finally {
            setLoad(false)
        }
    }

    return <>
        <form className='generation__from' onSubmit={generationQr}>
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
            {!load && (codeQr ? <img className="generation__img" src={codeQr} alt='qe-code'/> :
                <div className='generation__load'>Generate your QR code</div>)}
            <input type="submit" className='generation__submit' value='Generate QR Code'/>
        </form>
    </>
}