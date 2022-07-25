import logo from './logo.svg';
import './App.css';
import DynamicForm from './components/DynamicForm';

const drug1 = {
  "fields": [
    {
      "label": "Date of Birth (YYYY-MM-DD)",
      "key": "birthday",
      "isRequired": true,
      "order": 1,
      "isReadonly": false,
      "type": "date"
    },
    {
      "label": "Gestational Age",
      "key": "gestationalAge",
      "isRequired": true,
      "order": 3,
      "unit": "weeks",
      "isReadonly": false,
      "type": "number"
    },
    {
      "label": "Sex",
      "items": [
        {
          "value": "male",
          "text": "Male"
        },
        {
          "value": "female",
          "text": "Female"
        }
      ],
      "key": "sex",
      "isRequired": true,
      "order": 4,
      "isReadonly": false,
      "type": "dropdown"
    },
    {
      "label": "Height",
      "key": "height",
      "isRequired": true,
      "order": 5,
      "unit": "cm",
      "isReadonly": false,
      "type": "number"
    },
    {
      "label": "Weight",
      "key": "weight",
      "isRequired": true,
      "order": 6,
      "unit": "kg",
      "isReadonly": false,
      "type": "number"
    },
    {
      "label": "BMI",
      "key": "bmi",
      "order": 11,
      "unit": "kg/m²",
      "isReadonly": true,
      "type": "number"
    }
  ]
};

const drug2 = {
  "fields": [
    {
      "label": "Date of Birth (YYYY-MM-DD)",
      "key": "birthday",
      "isRequired": true,
      "order": 1,
      "isReadonly": false,
      "type": "date"
    },
    {
      "label": "Sex",
      "items": [
        {
          "value": "male",
          "text": "Male"
        },
        {
          "value": "female",
          "text": "Female"
        }
      ],
      "key": "sex",
      "isRequired": true,
      "order": 2,
      "isReadonly": false,
      "type": "dropdown"
    },
    {
      "label": "Weight",
      "key": "weight",
      "isRequired": true,
      "order": 3,
      "unit": "kg",
      "isReadonly": false,
      "type": "number"
    }
  ]
}

function App() {
  return (
    <div className="App">
      <div className='form-container'>
        <div className='sub-container'>
          <p>Drug1.json</p>
          <DynamicForm jsonSchema={drug1}/>
        </div>
        <div className='sub-container'>
          <p>Drug2.json</p>
          <DynamicForm jsonSchema={drug2}/>
        </div>
      </div>
    </div>
  );
}

export default App;
