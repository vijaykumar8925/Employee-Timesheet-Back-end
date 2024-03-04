const express = require("express");
const router = express.Router();
const mysql = require("mysql");
// const nodemailer = require('../router/milddlewares/mailmiddleware');
const middleware = require('nodemailer')
const hbs = require('nodemailer-express-handlebars');

// const generateOtp = () => {
//   let otp = Math.floor(100000 + Math.random() * 900000);
//   return `${otp}`
// }

// let otps = generateOtp();

// console.log(otps)



async function main(vijay) {
  const transpoter = middleware.createTransport(
      {
          host : "smtp.gmail.com",
          port : 465,
          secure : true,
          service : 'Gmail',
          auth : {
              user : 'vijaykumarronaldo007@gmail.com',
              pass : 'zvffwuelccpbdbjj'
          }
      }
  )

  transpoter.use('compile',hbs({
      viewEngine:{
          extname:'.handlebars',
          layoutsDir:'views/',
          defaultLayout:'index'
      },
      viewPath:'views',
      extName:'.handlebars'
  }))

  const emails = await ['vijaykumarunofficial@gmail.com',vijay];

  const generateOtp = () => {
    let otp = Math.floor(100000 + Math.random() * 900000);
    return `${otp}`
  }
  
  let otps = generateOtp();
  
  


  let sqlQuery = `INSERT INTO tbl_employee_otp_emplotp(emplotp__otp,emplotp_is_active,emplotp_email)
  VALUES('${otps}','1','${vijay}')`
connection.query(sqlQuery,(err,result) => {
console.log(result,err)
})
  
  
 

  const info = await transpoter.sendMail({
      from : 'vijaykumarronaldo007@gmail.com',
      to : emails,
      subject : 'Hi buddy Igonre it just a nodemailer',
      html :`
       <h1>Your Verfication code -${otps}</h1>
      `,
      // html : `
      //    <h1>Successfully Signed up</h1>
      //    <h1>Happy new year you are going to get great yera head!!!</h1>
      //    <img src='cid:unique@gmail.com' width="400"/>
      // `,
      text : 'Successfully Signed Up',
      attachments : [{
          filename:'pexels-james-wheeler-1519088.jpg',
          path : './pexels-james-wheeler-1519088.jpg',
          cid:'unique@gmail.com'
      }],
      template : 'index'
  })
  // console.log("Message Sent :" + info.messageId);
  // console.log(info)
}

const connection = mysql.createConnection({
  host: "192.168.1.150",
  user: "root",
  password: "M@p0l@2020",
  database: "db_intra_connect",
});
const cron = require("node-cron");
const { connect } = require("../Controllers");

module.exports = {
  users: (req, res) => {
    var task = cron.schedule("*/10 * * * * *", () => {
      let query1 = "SELECT * FROM break_";
      connection.query(query1, (err, result) => {
        if (err) {
          return false;
        } else {
          let json = {
            name: "ranjith",
            age: "20",
          };
          res.send(json);
          task.stop();
        }
      });
    });
  },
  
  EmplyoeForm:async (req, res, next) => {
       console.log(req.files.file1[0].filename)
       console.log(req.files.file2[0].filename)
try {
  const{username,dob,age,depatmt,design,dateofjoin,gender,branch,qualif,empcode,skills,resAdress,PerAddress,mblno,email,residentAdress,resCountry,resState,resCity,
    resPincode,perAdress,perCountry,perState,perCity,perPincode,password}= await req.body
  let Skil= await skills.toString()
  let resume = await req.files.file1[0].filename;
  let photo = await req.files.file2[0].filename;
  console.log(req.body.empepr)
  const obj = await JSON.parse(JSON.stringify(req.body.empepr))
  console.log(obj)
      let EmpQuery = ` INSERT INTO tbl_employee_details_empldls (empldls_employee_name, empldls_gender, empldls_dateof_birth, empldls_age, empldls_department, empldls_designation,empldls_dateof_join,empldls_branch,empldls_max_qualification,empldls_skills,empldls_Emp_code,empldls_staying_address,empldls_permanent_address,empldls_resume,empldls_profile_photo,empldls_mobile,empldls_email,empldls_created_by,empldls_created_on,empldls_modified_by,empldls_modified_on,empldls_is_active,empldls_is_edited,empldls_last_transaction_id,empldls_origin_id,empldls_res_address,
        empldls_res_state,empldls_res_city,empldls_res_country,empldls_res_pincode,empldls_per_address,empldls_per_state,empldls_per_city,empldls_per_country,empldls_per_pincode,empldls_is_active_user,empldls_password)
        VALUES ('${username}', '${gender}', '${dob}', '${age}', '${depatmt}', '${design}','${dateofjoin}','${branch}','${qualif}','${Skil}','${empcode}','${resAdress}','${PerAddress}','${resume}','${photo}','${mblno}','${email}',1,'2012-06-18 10:34:09.000',2,'2012-06-18 10:34:09.000',0,1,10,25,'${residentAdress}','${resState}','${resCity}','${resCountry}','${resPincode}',
        '${perAdress}','${perState}','${perCity}','${perCountry}','${perPincode}','user','${password}');`;
      const fUNCTIO = connection.query(EmpQuery, (err, result) => {
        console.log(err)
        if (err) {
          res
            .status(404)
            .json({ message: " not inserted duplicate entry  data ", success: false, error: err });
        } else {
                
        for(let val of obj){   
          console.log(val)
          let resultid =  result.insertId;
          console.log(resultid)
          let EmpQuery2 =  `INSERT INTO tbl_employee_experience_epmlexp (empldls_id, epmlexp_comapany, epmlexp_from, epmlexp_to, epmlexp_duration, epmlexp_designation,epmlexp_created_by,epmlexp_created_on,epmlexp_modified_by,epmlexp_modified_on,epmlexp_is_active,epmlexp_is_edited,epmlexp_last_transaction_id,epmlexp_origin_id,epmlexp_role)
         VALUES ('${resultid}','${val.companyName}','${val.FromDate}','${val.ToDate}','${val.year}','${val.Design}',1,'2012-06-18 10:34:09.000',1,'2012-06-18 10:34:09.000',1,1,3,4,'${val.Role}');`;
          connection.query(EmpQuery2);
         }

         res.status(202).json({
          success: true,
          data: result,
          message: "insert succesfully",
        });
        }
      });
} catch (error) {
  console.log(error)
}
  },

  CheckTable : (req,res) => {
     console.log(req.body.checkValue)
     let sqlQuery = `INSERT INTO checkbox_chck (check_value)
                     VALUES(${req.body.checkValue});`;
     connection.query(sqlQuery,(err,result) => {
      console.log(result)
      console.log(err)
     })             
  },

  poster: async (req, res, next) => {
    try {
      let sql = "SELECT * FROM leave_req WHERE notiFica_ion=1";
      let User = connection.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
          return res.end();
        }
        for (let val of result) {
          let sqlQuery = `UPDATE leave_req SET notiFica_ion = 0 WHERE ID=${val.ID}`;
          let usEr2 = connection.query(sqlQuery, (err, result) => {
            if (err) throw err;
          });
        }
        res.status(200).json({
          success: true,
          data: result,
          message: "notification",
        });
      });
    } catch (error) {
      next(error);
    }
  },
  DepatemtService:  (req, res) => {
    let sqlQuery=  `SELECT * FROM emp_tble_depat_ment_service_empdptsrv`
      const result =  connection.query(sqlQuery,(err,result)=>{
        console.log(result[0].empdptsrv_vlaue)
        if(err) {
        res.status(404).json({
          success: false,
          data: err,
          message:'data not found'
         
        });
      }else{
        res.status(200).json({
          success: true,
          data: result,
         
        });
      }
      })
    
  },

  DataForm:async (req,res) => {

    
    let sqlQuery = ` SELECT *,
    GROUP_CONCAT( err.epmlexp_comapany SEPARATOR', ') AS comapny,
    GROUP_CONCAT(err.epmlexp_from , ' ' , 'TO' ,' ', err.epmlexp_to SEPARATOR' , ') AS days,
    GROUP_CONCAT( err.epmlexp_designation SEPARATOR', ') AS designations,
    GROUP_CONCAT(err.epmlexp_duration SEPARATOR', ') AS durations
    FROM tbl_employee_details_empldls 
    INNER JOIN tbl_employee_experience_epmlexp err ON tbl_employee_details_empldls.empldls_id = err.empldls_id
    WHERE tbl_employee_details_empldls.empldls_modified_by = 2 AND err.epmlexp_modified_by = 1
    GROUP BY err.empldls_id;`

    const results =  connection.query(sqlQuery,(err,result) =>{
      
        if(err){
          console.log(err)
          res.status(404).json({
            success :false,
            data : err,
            message : 'data not found'
          })
        }else{
          
          res.status(200).json({
            success : true,
            data : result,
          })
        }
        // experienceFunc()
    })
  },

  DeleteTable: async (req,res) => {
    
    const deleteFunc = async (data) => {
      for(let val of data) {
        let Results = await val.empldls_id
       
        await new Promise ((ress,rej) => {
          let val = 0;
          let sqlQuery = `UPDATE tbl_employee_details_empldls
          SET empldls_modified_by = ${0}
          WHERE empldls_id = ${Results};`
            connection.query(sqlQuery,(err,result) => {
              console.log(err)
              console.log(result)
             
            })
         })
      }
       
    }

    const deleteFunc1 = async (data) => {
      for(let val of data) {
        let Results = await val.empldls_id
        

        await new Promise ((ress,rej) => {
          let val = 0;
          let sqlQuery = `UPDATE tbl_employee_experience_epmlexp
          SET epmlexp_modified_by = ${0}
          WHERE empldls_id = ${Results};`
            connection.query(sqlQuery,(err,result) => {
              console.log(err)
              console.log(result)
             
            })
         })
      }
       
    }


    let Value = +req.query.Deleteid

    try{
      await new Promise ((ress,rej) => {
        let sqlQuery = `SELECT * FROM tbl_employee_details_empldls 
        INNER JOIN tbl_employee_experience_epmlexp err ON tbl_employee_details_empldls.empldls_id = err.empldls_id
        WHERE tbl_employee_details_empldls.empldls_id =${Value} AND err.empldls_id =${Value};`

        const results =  connection.query(sqlQuery,(err,result) => {
          
             if(err) return rej(err)

             ress(
              res.status(200).json({
                success : true,
                message:'successfully Deleted'
              }),
              deleteFunc(result),
              deleteFunc1(result)
             )

            //  ress(
              
            //   res.status(200).json({
            //     success: true,
            //     data: results,
            //     message:'Sucessfully Deleted'
            //   }),
            //   // 
            //  )
        })
      })
    } catch (err) {
      // res.status(404).json({
      //   success: false,
      //   data: err,
      //   message:'Not Deleted'
      // });
    }
    
  },

  EditTable : async (req,res) => {
    let value = +req.query.id
    

    let sqlQuery = `SELECT * FROM tbl_employee_details_empldls WHERE empldls_id = ${value};`
    const results = connection.query(sqlQuery,(err,result) => {
      
       if(err) {
        res.status(404).json({
          success:false,
          data : err,
          message : 'data not found'
        })
       }else {
        res.status(200).json({
          success:true,
          data:result,
          message:'data coming'
        })
       }
    })
  },

  ExperinceTable : async (req,res) => {
    let value = +req.query.ExpId
  
    let sqlQuery = `SELECT * FROM tbl_employee_experience_epmlexp WHERE empldls_id = ${value};`
    const results = connection.query(sqlQuery,(err,result) => {
   
       if(err) {
        res.status(404).json({
          success:false,
          data : err,
          message : 'data not found'
        })
       }else {
        res.status(200).json({
          success:true,
          data:result,
          message:'data coming'
        })
       }
    })
  },

  Update: async (req,res) => {
    console.log(req.body);
    const{username,dob,age,depatmt,design,dateofjoin,gender,branch,qualif,empcode,skills,resAdress,PerAddress,mblno,email,residentAdress,resCountry,resState,resCity,
      resPincode,perAdress,perCountry,perState,perCity,perPincode}= await req.body
    let Skil= await skills.toString()
    console.log(Skil)
    const obj = await JSON.parse(JSON.stringify(req.body.empepr))
    console.log(obj)
    let sqlQuery = `UPDATE tbl_employee_details_empldls
    SET empldls_employee_name = '${username}', empldls_gender = '${gender}', empldls_dateof_birth = '${dob}', empldls_age = '${age}', empldls_department = '${depatmt}' , 
    empldls_designation = '${design}', empldls_dateof_join = '${dateofjoin}' , empldls_branch = '${branch}' , empldls_max_qualification = '${qualif}' , empldls_skills = '${Skil}',
     empldls_Emp_code = '${empcode}' , empldls_staying_address = '${resAdress}' , empldls_permanent_address = '${perAdress}',empldls_resume = '${req.body.file1}', empldls_profile_photo = '${req.body.file2}' ,empldls_mobile = '${mblno}',
     empldls_email = '${email}', empldls_is_edited = ${0}
     WHERE  empldls_id = ${req.body.empID} ;`
     const fUNCTIO = connection.query(sqlQuery, (err, result) => {
      console.log(err)
      if (err) {
        res
          .status(404)
          .json({ message: " not Updated  data", success: false, error: err });
      }else{

        for(let val of obj){   
          console.log(val)
          let EmpQuery2 =  `UPDATE tbl_employee_experience_epmlexp
          SET epmlexp_comapany = '${val.epmlexp_comapany}' , epmlexp_from = '${val.epmlexp_from}' , epmlexp_to = '${val.epmlexp_to}', epmlexp_duration = '${val.epmlexp_duration}', epmlexp_designation = '${val.epmlexp_designation}', epmlexp_role = '${val.epmlexp_role}' , epmlexp_is_edited = ${0}
          WHERE epmlexp_id = ${req.body.expId} AND empldls_id = ${req.body.empID};`
          connection.query(EmpQuery2);
         }
        
        res
          .status(200)
          .json({ message: "Updated  data", success: true, data : result });
      }
    })
       
  },

  
  DesignService:async  (req, res) => {
    let sqlQuery=  `SELECT * FROM emp_tble_designation_service_empdsgsrv`
 
      const result = await connection.query(sqlQuery,(err,result)=>{
        if(err) {
        res.status(404).json({
          success: false,
          data: err,
          message:'data not found'
         
        });
      }else{
        res.status(200).json({
          success: true,
          data: result,
         
        });
      }
      })
    
  },
  BranchService:async  (req, res) => {
    try {
      await new Promise((ress, rej) => {
        let sqlQuery=  `SELECT * FROM emp_tble_branch_service_empbrachsrv`
         connection.query(sqlQuery, (err, results) => {
             if (err)  return rej(err); 
             if(results.length==0) return rej('empty')

             ress(
 res.status(200).json({
              success: true,
              data: results,
              
             
            })
             )
            
         });
     });
 } catch (err) {
  res.status(404).json({
    success: true,
    data: err,
    
   
  });
 }
  },

  QualifService:async  (req, res) => {
    try {
      await new Promise((ress, rej) => {
        let sqlQuery=  `SELECT * FROM emp_tble_qualifi_service_empqualisrv`
         connection.query(sqlQuery, (err, results) => {
             if (err)  return rej(err); 
             if(results.length==0) return rej('empty')
             res.status(200).json({
              success: true,
              data: results,
              
             
            });
         });
     });
 } catch (err) {
  res.status(404).json({
    success: true,
    data: err,
    
   
  });
 }
  },


  EmpResigCount:async  (req, res) => {
    try {
      await new Promise((ress, rej) => {
        let sqlQuery=  `SELECT COUNT(empldls_id) FROM tbl_employee_details_empldls`
         connection.query(sqlQuery, (err, results) => {
             if (err)  return rej(err); 
           
             res.status(200).json({
              success: true,
              data: results,
              
             
            });
         });
     });
 } catch (err) {
  res.status(404).json({
    success: true,
    data: err,
    message:'cannot get employee count'
  });
 }
  },

  CountryService:async  (req, res) => {
    try {
      await new Promise((ress, rej) => {
        let sqlQuery=  `SELECT * FROM emp_country`
         connection.query(sqlQuery, (err, results) => {
             if (err)  return rej(err); 
           ress(
            res.status(200).json({
              success: true,
              data: results,
              
             
            })
           )
            
         });
     });
 } catch (err) {
  res.status(404).json({
    success: true,
    data: err,
    message:'cannot get employee count'
    
   
  });
 }
  },






StateService:async  (req, res) => {
  const StaeFuntion= async (result)=>{
    for(let val of result){
     
      let Result= await val.emp_countryid
      await new Promise((ress, rej) => {
            let sqlQuery=   `SELECT * FROM emp_state WHERE emp_countryid='${Result}'`
             connection.query(sqlQuery, (err, results) => {
                 if (err)  return rej(err); 
                
               ress(
                res.status(200).json({
                  success: true,
                  data: results,
                })
               )   
             });
         });
    } 
  }
let Value = req.query.value

    try {
      await new Promise((ress, rej) => {
        let sqlQuery=  `SELECT * FROM emp_country WHERE emp_country_name='${Value}'`
         connection.query(sqlQuery, (err, results) => {
          
             if (err)  return rej(err); 
           
           ress( StaeFuntion(results))
           
            
         });
     });
    
 } catch (err) {
  res.status(404).json({
    success: false,
    data: err,
    message:'cannot get employee count'
    
   
  });
 }


 
  },
  CityService: async (req,res) => {
    const CityFunction = async (result) => {
    for (let Val of result){
    let Result = await Val.emp_stateID;
    await new Promise ((ress,rej) => {
    let sqlQuery = `SELECT * FROM emp_city WHERE emp_stateID='${Result}'`
   
    connection.query(sqlQuery,(err,result) => {
    if(err) return rej(err)
   
    ress(
    res.status(200).json({
    success:true,
    data : result,
    })
    )
    })
    })
    }
    }
    let Value = req.query.value
    console.log(Value)
    try{
    await new Promise ((ress,rej) => {
    let sqlQuery = `SELECT * FROM emp_state WHERE emp_state_name='${Value}'`
    connection.query(sqlQuery,(err,result) => {
    if(err) return rej(err);
   
    ress(CityFunction(result))
    })
    })
    }catch (err) {
    res.status(404).json({
    success : false,
    data : err,
    message : 'cannot get City Value'
    })
    }
    },


    UpdateDepartment:   async (req, res) => {
      console.log(req.body);
      let empdptsrv_modified_by = 1 ;
      let empdptsrv_created_by = 1 ; 
      let empdptsrv_is_active = 1 ; 
      let empdptsrv_is_edited = 2 ; 
      let  empdptsrv_last_transaction_id = 2 
       let query = ` INSERT INTO emp_tble_depat_ment_service_empdptsrv ( empdptsrv_vlaue , empdptsrv_created_by  , empdptsrv_created_on , empdptsrv_modified_by , empdptsrv_modified_on , empdptsrv_is_active , empdptsrv_is_edited , empdptsrv_last_transaction_id   ) VALUES ('${req.body.department}', '${empdptsrv_modified_by}' , '${req.body.departmentDateTime}' , '${empdptsrv_created_by}' , '${req.body.departmentDateTime}' , '${empdptsrv_is_active}' , '${empdptsrv_is_edited}' , '${empdptsrv_last_transaction_id}') `
        connection.query(query , (err , result)=>{
           if(err) {
           return  console.log(err)
           }
           else {
             return res.send(result)
           }
        })
    },
  
    //update designation 
    UpdateDesignation:   async (req, res) => {
      let empdsgsrv_modified_by = 1 ;
      let empdsgsrv_created_by = 1 ; 
      let empdsgsrv_is_active = 1 ; 
      let empdsgsrv_is_edited = 2 ; 
      let  empdsgsrv_last_transaction_id = 2 
       let query = ` INSERT INTO emp_tble_designation_service_empdsgsrv (  empdsgsrv_vlaue, empdsgsrv_created_by  ,  empdsgsrv_created_on ,  empdsgsrv_modified_by ,  empdsgsrv_modified_on ,  empdsgsrv_is_active ,  empdsgsrv_is_edited ,  empdsgsrv_last_transaction_id   ) VALUES ('${req.body.designation}', '${empdsgsrv_modified_by}' , '${req.body.designationDateTime}' , '${empdsgsrv_created_by}' , '${req.body.designationDateTime}' , '${empdsgsrv_is_active}' , '${empdsgsrv_is_edited}' , '${empdsgsrv_last_transaction_id}') `
        connection.query(query , (err , result)=>{
           console.log(err);
           console.log(result);
        })
    },
  
  
    //update branch 
    UpdateBranch:   async (req, res) => {
      console.log(req.body);
      let empbrachsrv_modified_by = 1 ;
      let empbrachsrv_created_by = 1 ; 
      let empbrachsrv_is_active = 1 ; 
      let empbrachsrv_is_edited = 2 ; 
      let  empbrachsrv_last_transaction_id = 2 
       let query = ` INSERT INTO emp_tble_branch_service_empbrachsrv(  empbrachsrv_vlaue, empbrachsrv_created_by  ,  empbrachsrv_created_on ,  empbrachsrv_modified_by ,  empbrachsrv_modified_on ,  empbrachsrv_is_active ,  empbrachsrv_is_edited ,  empbrachsrv_last_transaction_id   ) VALUES ('${req.body.branch}', '${empbrachsrv_modified_by}' , '${req.body.branchDateTime}' , '${empbrachsrv_created_by}' , '${req.body.branchDateTime}' , '${empbrachsrv_is_active}' , '${empbrachsrv_is_edited}' , '${empbrachsrv_last_transaction_id}') `
        connection.query(query , (err , result)=>{
           console.log(err);
           console.log(result);
        })
    },
  
  
    //update Qualification
    UpdateQualification:   async (req, res) => {
      console.log(req.body);
      let empqualisrv_modified_by = 1 ;
      let empqualisrv_created_by = 1 ; 
      let empqualisrv_is_active = 1 ; 
      let empqualisrv_is_edited = 2 ; 
      let  empqualisrv_last_transaction_id = 2 
       let query = ` INSERT INTO emp_tble_qualifi_service_empqualisrv (  empqualisrv_vlaue, empqualisrv_created_by  ,  empqualisrv_created_on ,  empqualisrv_modified_by ,  empqualisrv_modified_on ,  empqualisrv_is_active ,  empqualisrv_is_edited ,  empqualisrv_last_transaction_id   ) VALUES ('${req.body.qualification}', '${empqualisrv_modified_by}' , '${req.body.qualificationDateTime}' , '${empqualisrv_created_by}' , '${req.body.qualificationDateTime}' , '${empqualisrv_is_active}' , '${empqualisrv_is_edited}' , '${empqualisrv_last_transaction_id}') `
        connection.query(query , (err , result)=>{
           console.log(err);
           console.log(result);
        })
    },

    FileSystem: async (req,res) => {
      console.log(req.file)
      const image = req.file.filename;
      let sqlQuery = `INSERT INTO image (image_name) VALUES ("${image}");`;
      connection.query(sqlQuery,(err,result) => {
        if(err) return res.json({message:"Error"})
        return res.json({message:"success"})
      })
    },

    FileValue : async (req,res) => {
      let sqlQuery = `SELECT * FROM image`;
      connection.query(sqlQuery,(err,result) => {
        if(err) return res.json({message:"Error"})
        return res.json(result)
      })
    },

    SignIn : async (req,res) => {
      let sqlQuery = `SELECT * FROM tbl_employee_details_empldls
      WHERE empldls_email = '${req.body.email}';`;
      connection.query(sqlQuery,(err,result) => {
        console.log(result)
        if (result.length == 0){
          res.send({result:false})
        }else{
            for(let val of result){
              let value = val.empldls_password;
              if(req.body.password == value){
                res.status(201).json({
                  result,
                });
              }else{
                res.send({result:false})
              }
            }
        }
      })
    },

    ProfileData : (req,res) => {
      // console.log(req.query.email)
      if (!req.query.email == ''){
        let sqlQuery = `SELECT * FROM tbl_employee_details_empldls
        WHERE empldls_email = '${req.query.email}';`;
        connection.query(sqlQuery,(err,result) => {
                //  console.log(result)
                 res.status(201).json({
                  result,
                });
        })
      }
      
    },
    ForgetPassword : (req,res) => {
      console.log(req.body)
      let sqlQuery = `SELECT * FROM tbl_employee_details_empldls WHERE empldls_email = "${req.body.email}";`;
       connection.query(sqlQuery,(err,result) => {
        if(result.length == 0 ){
          res.send({message:'Invalid Email'})
        }else{
          for (let val of result){
            let phone = val.empldls_mobile;
            
            if (phone == req.body.phone){
              console.log(result)
              res.status(200).json({
                success:true,
                data : result,
                message : 'Otp Successfully Sended'
                })
               

                let sqlQuery = `UPDATE tbl_employee_otp_emplotp 
                SET emplotp_is_active = '0'
                WHERE emplotp_email = '${val.empldls_email}';`;
                connection.query(sqlQuery,(err,result) => {
                  console.log(result)
                  console.log(err)
                  
                })
                main(req.body.email)
            }else{
              res.send({message:'Invalid Phone Number'},{data:val.empldls_email})
            }
          }
        }
       })
    },
    OtpVerfication: (req,res) => {
      console.log(req.body)
      let sqlQuery = `SELECT * FROM tbl_employee_otp_emplotp 
      WHERE emplotp_is_active = '1' AND emplotp_email = '${req.body.email}'; `;
      connection.query(sqlQuery,(err,result) => {
        console.log(result,err)
        for (let val of result){
          let otps = val.emplotp__otp;
          if(otps == req.body.otp){
            res.send({meassage:'Successful'})
          }else {
            res.send({meassage:'Incorrect otp'})
          }
        }
      })
    },

    ChangePassword : (req,res) => {
      // console.log(req.body)
      let sqlQuery = `UPDATE tbl_employee_details_empldls 
      SET empldls_password = '${req.body.confpass}'
      WHERE empldls_email = '${req.body.mail}';`;
      connection.query(sqlQuery,(err,result) => {
        console.log(result)
        if(result.length != 0 ){
          res.send({messsage:'Password Upadated!!'})
        }
      })
     },
     
     BreakSubmit : (req,res) => {
      console.log(req.body)
      let sqlQuery = `INSERT INTO tbl_break_details_brkdtls (brkdtls_break_type,brkdtls_start_time,brkdtls_end_time,brkdtls_duration,brkdtls_reason,brkdtls_remarks,brkdtls_created_by,brkdtls_created_on,
        brkdtls_modified_by,brkdtls_modified_on,brkdtls_is_active,brkdtls_is_edited,brkdtls_last_transaction_id,brkdtls_origin_id,brkdtls_email)
        VALUES ('${req.body.breaktype1}','${req.body.breakstart}','${req.body.breakend}','${req.body.breakduration}','${req.body.reason}','${req.body.remarks}',null,null,NULL,NULL,1,1,NULL,'1','${req.body.email}')`;
         
        connection.query(sqlQuery,(err,result) => {
         if(result != 0 ){
          res.send({message : 'Successfully Submited'})
         } else{
          res.send({message : 'Error Accuried at back-end'})
         }
        })
     },

     Breakdata : async (req,res) => {
      let values = await req.params.email;
       let sqlQuery = `SELECT * FROM tbl_break_details_brkdtls WHERE brkdtls_email = ${values};`;
       connection.query(sqlQuery,(err,result) => {
        if(result != 0){
          res.send({data : result})
        }else{
          res.send({data : err})
        }
       })
     },
     TaskDetails : async (req,res) => {
      let values = await req.body
      console.log(values)
      let sqlQuery = `INSERT INTO tbl_task_details_tskdtls (tskdtls_task_reference,tskdtls_activity,tskdtls_project,tskdtls_task_type,tskdtls_work_details,tskdtls_start_time,tskdtls_end_time,tskdtls_duration,tskdtls_status,tskdtls_created_by,tskdtls_created_on,
        tskdtls_modified_by,tskdtls_modified_on,tskdtls_is_active,tskdtls_is_edited,tskdtls_last_transaction_id,tskdtls_origin_id,tskdtls_email)
        VALUES ('${values.task_ref}','${values.acti_vity}','${values.pro_ject}','${values.task_type}','${values.wrk_detls}','${values.strt_time}','${values.end_time}','${values.duration}','${values.status}',null,null,NULL,NULL,1,1,NULL,'1','${values.email}');`
        connection.query(sqlQuery,(err,result) => {
          if(result != 0 ){
            res.send({message : 'Successfully Submitted'})
          }else{
            res.send({message : 'There is an Error on server side'})
          }
        })
     },

     TaskData: async (req,res) => {
      let values = await req.params.email;
       let sqlQuery = `SELECT * FROM tbl_task_details_tskdtls WHERE tskdtls_email = ${values};`;
       connection.query(sqlQuery,(err,result) => {
        if(result != 0){
          res.send({data : result})
        }else{
          res.send({data : err})
        }
       })
     },

     LeaveDetails : async (req,res) => {
      let values = await req.body
      console.log(values)
      let sqlQuery = `INSERT INTO tbl_leaverequest_details_lvrqdls (lvrqdls_no_of_days,lvrqdls_date,lvrqdls_date_session,lvrqdls_from_date,lvrqdls_from_session,lvrqdls_to_date,lvrqdls_to_session,lvrqdls_reason,lvrqdls_remarks,lvrqdls_created_by,lvrqdls_created_on,
        lvrqdls_modified_by,lvrqdls_modified_on,lvrqdls_is_active,lvrqdls_is_edited,lvrqdls_last_transaction_id,lvrqdls_origin_id,lvrqdls_email)
        VALUES ('${values.days}','${values.date}','${values.dateopt}','${values.fromdate}','${values.fromsession}','${values.todate}','${values.tosession}','${values.reason}','${values.remarks}',null,null,NULL,NULL,1,1,NULL,'1','${values.email}');`;
        connection.query(sqlQuery,(err,result) => {
          if(result != 0 ){
            res.send({message : 'Successfully Submitted'})
          }else{
            res.send({message : 'There is an Error on server side'})
          }
        })
     },

     LeaveData : async (req,res) => {
      let values = await req.params.email;
        let sqlQuery = `SELECT * FROM tbl_leaverequest_details_lvrqdls WHERE lvrqdls_email = ${values};`;
        connection.query(sqlQuery,(err,result) => {
          if(result != 0 ){
            res.send({data : result})
          }else{
            res.send({error:err})
          }
        })
     },

     PermissionDetails : async (req,res) => {
      let values = await req.body;
      console.log(values)
      let sqlQuery = `INSERT INTO tbl_permissionrequest_details_prmrdls (prmrdls_date,prmrdls_from_time,prmrdls_to_time,prmrdls_reason,prmrdls_remarks,prmrdls_created_by,prmrdls_created_on,
        prmrdls_modified_by,prmrdls_modified_on,prmrdls_is_active,prmrdls_is_edited,prmrdls_last_transaction_id,prmrdls_origin_id,prmrdls_email,prmrdls_duration)
        VALUES ('${values.date1}','${values.fromTime}','${values.toTime}','${values.reason}','${values.remarks}',null,null,NULL,NULL,1,1,NULL,'1','${values.email}','${values.duration}');`;

        connection.query(sqlQuery,(err,result) => {
          if(result != 0 ){
            res.send({message : 'Successfully Submitted'})
          }else{
            res.send({message : 'There is an Error on server side'})
          }
        })
     },

     PermissionData : async (req,res) => {
        let values = await req.params.email;

        let sqlQuery = `SELECT * FROM tbl_permissionrequest_details_prmrdls WHERE prmrdls_email = ${values};`;

        connection.query(sqlQuery,(err,result) => {
          if(result != 0 ){
            res.send({data : result})
          }else{
            res.send({error:err})
          }
        })
     }

    
};




router.use(function (err, req, res, next) {
  // return error response
  res
    .status(500)
    .json({ message: "Error in invocation of API: /products" + err });
});


