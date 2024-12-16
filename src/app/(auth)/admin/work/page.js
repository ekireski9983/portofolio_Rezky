"use client"
import { useState } from 'react';
import Card from '../../../../components/card';
import WorkList from './component/work-list'

export default function AdminWork() {
  const [data, setData] = useState({
    title:'',
    id:'',
    employeType:'',
    companyName:'',
    location:'',
    startDate:'',
    endDate:'',
  });

const clearForm = ()=>{
  setData({
    title:'',
    id:'',
    employeType:'',
    companyName:'',
    location:'',
    startDate:'',
    endDate:'',
  })
}
  
  const optEmployeType = [
    {label:'Full Time', value:'full-time'},
    {label:'Part Time', value:'part-time'},
    {label:'Contract', value:'contract'},
    {label:'Internship', value:'internship'}
  ]

  const optLocation = [
    {label:'Onsite', value:'onsite'},
    {label:'WFH', value:'wfh'},
  ]

  const inputHandler= (e) =>{
    setData({...data, [e.target.name]: e.target.value })
  }

  async function onSubmitData() {
    try{
      let res = await fetch('/api/work', {
        method:'POST',
        body: JSON.stringify(data),
      })
      let resData = await res.json()
      if(!resData.data){
        throw Error(resData.message)
      }
      alert("Data berhasil disimpan dengan id \n"+ resData.data.insertedId)
    }catch(err){
      console.error("ERR", err.message)
      alert(err.message)
    }
  }

  const onEditItem = async (id)=>{
    const response = await fetch(`/api/work/${id}`);
    let resData = await response.json();
   console.log(resData)
    setData({
      id: resData.data[0]._id,
      title:resData.data[0].title,
      employeType: resData.data[0].employeType,
      companyName: resData.data[0].companyName,
      location: resData.data[0].location,
      startDate: resData.data[0].startDate,
      endDate: resData.data[0].endDate,
    })
  }

  const onUpdateData = async ()=>{
    try{
      let res = await fetch(`/api/work/${data.id}`, {
        method:'PUT',
        body: JSON.stringify(data),
      })
      let resData = await res.json()
      if(!resData.data){
        throw Error(resData.message)
      }
      alert("Data berhasil disimpan dengan id")
      clearForm()
    }catch(err){
      console.error("ERR", err.message)
      alert(err.message)
    }
  }


  return (<>
      <Card title="Work Form" className="pb-5">
        <div className="w-full my-2">
            <label>Title</label> 
            <input 
              type="text" 
              name='title'
              value={data.title}
              onChange={inputHandler}
              className="w-full border my-input-text"/>
        </div>

        <div className="w-full my-2">
            <label>Employe Type</label>
            <select  
              name='employeType' 
              onChange={inputHandler}
              className="w-full border my-input-text">
              {
                optEmployeType && 
                  optEmployeType.map((item, key)=>
                    <option key={key} value={item.value}>{item.label}</option>
                  )
              }
            </select>
        </div>

        <div className="w-full my-2">
            <label>Company Name</label>
            <input 
              name='companyName' 
              type="text" 
              value={data.companyName}
              onChange={inputHandler}
              className="w-full border my-input-text"/>
        </div>

        <div className="w-full my-2">
            <label>Location</label>
            <select 
              name='location'
              onChange={inputHandler}
              className="w-full border my-input-text">
              {
                optLocation && 
                optLocation.map((item, key)=>
                    <option key={key} value={item.value}>{item.label}</option>
                  )
              }
            </select>
        </div>

        <div className="w-full my-2">
            <label>Start Date</label>
            <input 
              name='startDate'
              value={data.startDate}
              onChange={inputHandler}
              type="date" 
              className="w-full border my-input-text"/>
        </div>

        <div className="w-full my-2">
            <label>End Date</label>
            <input 
              name='endDate'
              value={data.endDate}
              onChange={inputHandler}
              type="date" 
              className="w-full border my-input-text"/>
        </div>

            {
               data.id.length > 0 ?
                <button 
                  onClick={onUpdateData}
                  className="mx-1 h-9 items-center justify-center px-4  rounded-md bg-amber-500">
                    <label>Update Data</label>
                </button> 
              :
                <button 
                  onClick={onSubmitData}
                  className="mx-1 h-9 items-center justify-center px-4  rounded-md bg-amber-500">
                    <label>Submit Data</label>
                </button>
            }

         <button 
            onClick={clearForm}
            className="mx-1 h-9 items-center justify-center px-4  rounded-md bg-amber-500">
              <label>Cancel</label>
          </button>
      </Card>
      
      <Card title="List of Work" style="mt-5">
        <WorkList onEditItem={(val)=>onEditItem(val)}/>
      </Card>
    </>
  );
}
  