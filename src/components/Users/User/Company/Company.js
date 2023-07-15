const Company = ({company}) => {

    const {name, catchPhrase, bs} = company;

    return (
        <div>
            <h3>Company</h3>
            <p>Name: {name}</p>
            <p>Catchphrase: {catchPhrase}</p>
            <p>BS: {bs}</p>
        </div>
    );
};

export {Company};