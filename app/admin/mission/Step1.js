import Select from 'react-select'
const Step1 = ({getdata}) => {
  // const { data, handleChange } = props;
    const selectData = (selectedOption, { name }) => {
      getdata(name,selectedOption.value); // Pass the input value to the parent component
    };
  const setdata = (e) => {
    const { name, value } = e.target;
    getdata(name,value); // Pass the input value to the parent component
  };

    let options=[
        {value:"1",label:"one"},
        {value:"2",label:"two"}
    ];


  return (
    <div className=" w-full mx-auto">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-14">

        <h2 className="form__title">Title</h2>
        <div className="form__fields">
          <div className="form__row flex-start-spb">
            <div className="form__field">
              <label htmlFor="focus-point" className="form__label">
                Mission Focal Point
              </label>
              <div className="">
                <Select
                  name="leader"
                  options={options}
                  id="focus-point"
                  onChange={selectData}
                  isSearchable
                >
                </Select>
              </div>
            </div>
          </div>
          <div className="form__info-box">
            <h3 className="form__info-box__title">
              Mission Focal Point Contact Details
            </h3>
            <div className="form__row flex-ctr-spb">
              <div className="form__col">
                <p>
                  <b>Name</b>
                </p>
                <p>Joel Peris</p>
              </div>
              <div className="form__col">
                <p>
                  <b>Satellite Phone</b>
                </p>
                <p>+00 223456789</p>
              </div>
            </div>
            <div className="form__row flex-ctr-spb">
              <div className="form__col">
                <p>
                  <b>Phone</b>
                </p>
                <p>+00 223456789</p>
              </div>
              <div className="form__col">
                <p>
                  <b>Email Address</b>
                </p>
                <p>user@yourmai.com</p>
              </div>
            </div>
            <div className="form__row flex-ctr-spb">
              <div className="form__col">
                <p>
                  <b>Whatsapp</b>
                </p>
                <p>+00 223456789</p>
              </div>
            </div>
          </div>
          <div className="form__row flex-start-spb">
            <div className="form__field">
              <label htmlFor="agencies" className="form__label">
                Agencies
              </label>
              <div className="select-wrap">
                <Select
                    name="agency"
                    options={options}
                    onChange={selectData}
                    isSearchable
                >
                </Select>
              </div>
            </div>
            <div className="form__field">
              <label htmlFor="date" className="form__label">
                Movement Date
              </label>
              <div className="date-wrap">
                <input type="date" onChange={setdata} name="movement_date" className="form__input" id="date" value="" />
              </div>
            </div>
          </div>
          <div className="form__row flex-start-spb">
            <div className="form__field">
              <label htmlFor="classification" className="form__label">
                Mission Classification
              </label>
              <textarea
                className="form__textarea"
                name="mission_classification"
                onChange={setdata}
                id="classification"
              ></textarea>
            </div>
            <div className="form__field">
              <label htmlFor="purpose" className="form__label">
                Purpose
              </label>
              <textarea
                className="form__textarea"
                name="purpose"
                onChange={setdata}
                id="purpose"
              ></textarea>
            </div>
          </div>
          <div className="form__row flex-start-spb">
            <div className="form__field">
              <label htmlFor="remarks" className="form__label">
                Remarks
              </label>
              <textarea
                className="form__textarea"
                name="remarks"
                onChange={setdata}
                id="remarks"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
