const express = require('express')
const router = express.Router()
const mysql = require("mysql");
const users=require('../router/index')
const multer  = require('multer')
const path = require("path");

const connection = mysql.createConnection({
    host: "192.168.1.150",
    user: "root",
    password: "M@p0l@2020",
    database: "msts_intra_connect",
  });
  // const upload = multer({ dest: 'resume/' })
  const uploading = multer({dest:'files/'})
  const storage = multer.diskStorage({
    destination: (req,file,cb) => {
          cb(null,'files/')
    },
    filename : (req,file,cb) => {
      cb(null,file.fieldname+"_"+ Date.now()+path.extname(file.originalname));
    }
  })
  const storages = multer.diskStorage({
    destination: (req,file,cb) => {
          cb(null,'resume/')
    },
    filename : (req,file,cb) => {
      cb(null,file.fieldname+"_"+ Date.now()+path.extname(file.originalname));
    }
  })
  const uploads = multer({
    storage:storage
  })

 const upload = multer({
  storage:storages
 })

router.get("/get",users.poster);
router.get("/post",users.users);
router.post("/post/empform",upload.fields([
  { name: 'file1', maxCount: 1 },
  { name: 'file2', maxCount: 6 },
]),(users. EmplyoeForm));
router.post("/post/files",uploads.single('file'),(users.FileSystem))
router.get("/post/depatemtservice",(users.DepatemtService));
router.get("/post/designservice",(users.DesignService));
router.get("/post/branchservice",(users.BranchService));
router.get("/post/qualifservice",(users.QualifService));
router.get("/post/empresigCount",(users.EmpResigCount));
router.get("/post/countryservice",(users.CountryService));
router.get("/post/stateservice",(users.StateService));
router.get("/post/cityservice",(users.CityService));
router.get("/post/dataform",(users.DataForm));
router.get("/post/delete",(users.DeleteTable));
router.get("/post/edit",(users.EditTable));
router.get("/post/experience",(users.ExperinceTable));
router.get("/post/filevalue",(users.FileValue));
router.post("/post/check",(users.CheckTable));
router.post("/post/update",(users.Update));
router.post("/post/user/login",(users.SignIn))
router.get("/post/profile",(users.ProfileData))
router.post("/post/forgetpassword",(users.ForgetPassword))
router.post("/post/otp",(users.OtpVerfication))
router.post("/post/changepassword",(users.ChangePassword))
// lakshmi
router.post("/post/updatedepartment",(users.UpdateDepartment));
router.post("/post/updatedesignation",(users.UpdateDesignation));
router.post("/post/updatebranch",(users.UpdateBranch));
router.post("/post/updatequalification",(users.UpdateQualification));
router.post("/post/breakdetails",(users.BreakSubmit))
router.get("/post/breakdata/:email",(users.Breakdata));
router.post("/post/taskdetails",(users.TaskDetails));
router.get("/post/tasklist/:email",(users.TaskData));
router.post("/post/leavedetails",(users.LeaveDetails));
router.get("/post/leavedata/:email",(users.LeaveData))
router.post("/post/permissiondetails",(users.PermissionDetails));
router.get("/post/permissiondata/:email",(users.PermissionData))


// router.get("/post",users.poster);

module.exports=router