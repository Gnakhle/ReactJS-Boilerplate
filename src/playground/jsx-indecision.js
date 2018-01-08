console.log('App.js is running!');



const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
};


// JSX ~ JavaScript XML

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderListApp();
    }
};




const appRoot = document.getElementById('app');

const removeFunc = () => {
    app.options = [];
    renderListApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderListApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {(app.subtitle) && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={removeFunc}>Remove All</button>
            <ol>
                {app.options.map((item) => <li key={item}>{item}</li> 
                )}
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

renderListApp();