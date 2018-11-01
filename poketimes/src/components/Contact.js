import React from 'react';

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about');
    }, 2000);

    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>
                asjd aisdjioa jdiaosj iojasidoj aisodj aoisjdioa jsiodjasiodj aiosjd ioasjiodajsiodjaiosjdioajsd ioajs doiajs oidjaios jaiosjd ioajsdoiaj siodjas
                asidj aoisjd oiasjd ioajsdio jasoidjaiosdjaiosjdioajsdoiajsdasd
                asdajs a ajsdioajsdioja iosjdasjd ia sdoiasodijasiodj aisjd aoisjd as[diajs dasd]
            </p>
        </div>
    );
};

export default Contact;