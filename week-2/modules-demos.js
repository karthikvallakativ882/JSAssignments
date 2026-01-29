/*Project story:
-------------
“We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

Data setup:
-----------
*/
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

console.log("------------------------------")
//TASKS
//------
//MODULE-1 :USER PROCESSING ENGINE
console.log("MODULE 1: USER PROCESSING ENGINE") 
  //-> Get only active users
  let activeUser = users.filter(ele=>ele.active === true)
  console.log(activeUser)
  console.log("------------------------------")
   
  //-> Extract names of active users
  let names = activeUser.map(ele=>{
        return ele.name
    })
    console.log(names)
    console.log("------------------------------")

  //-> Check if any admin exists
  let admins = users.filter(ele=>{
    return ele.role==="admin"
  })
  console.log(admins)
  console.log("------------------------------")

  //-> Find user by id
    let userById = users.find(ele=>{
        return ele.id===2
    })
    console.log(userById)
    console.log("------------------------------")

  //-> Deactivate a user immutably
    let deactivateUser = users.map(ele=>{
        if(ele.id===3){
            return {...ele, active:false}
        }   
        return ele
    })
    console.log(deactivateUser)
    console.log("------------------------------")



//MODULE 2: COURSE CATALOG ENGIN
console.log("MODULE 2: COURSE CATALOG ENGINE")
  //-> Get published courses  
    let publishedCourses = courses.filter(ele=>ele.published === true)
    console.log(publishedCourses)
    console.log("------------------------------")

  //-> Sort courses by price (high → low)
    let sortedCourses = courses.sort((a,e)=>e.price - a.price)
    console.log(sortedCourses)
    console.log("------------------------------")

  //-> Extract { title, price } only
    let courseDetails = courses.map(ele=>{
        return {title:ele.title, price:ele.price}
    })
    console.log(courseDetails)
    console.log("------------------------------")

  //-> Calculate total value of published courses
    let totalValue = publishedCourses.reduce((acc,ele)=>{
        return acc + ele.price
    },0)
    console.log(totalValue) 
    console.log("------------------------------")

  //-> Add a new course immutably       
    let newCourse = {id:104, title:"Angular", price:1399, published:true}
    let updatedCourses = [...courses, newCourse]
    console.log(updatedCourses)
    console.log("------------------------------")


//MODULE 3: SHOPPING CART ENGINE 
console.log("MODULE 3: SHOPPING CART ENGINE")
  //-> Merge cart with courses to get full course info
    let mergedCart = cart.map(cartItem=>{
        let courseInfo = courses.find(course=> course.id === cartItem.courseId)
        return {...cartItem, title: courseInfo.title, price: courseInfo.price}
    })
    console.log(mergedCart)
    console.log("------------------------------")

  //-> Calculate total cart amount
    let totalCartAmount = mergedCart.reduce((acc,ele)=>{
        return acc + (ele.price * ele.qty)
    },0)
    console.log(totalCartAmount)
    console.log("------------------------------")

  //-> Increase quantity of a course (immutably)
    let increasedQtyCart = mergedCart.map(ele=>{
        if(ele.courseId === 101){
            return {...ele, qty: ele.qty + 1}
        }
        return ele
    })
    console.log(increasedQtyCart)   
    console.log("------------------------------")

  //-> Remove a course from cart
    let removedCourseCart = mergedCart.filter(ele=> ele.courseId !== 103)
    console.log(removedCourseCart)
    console.log("------------------------------")

  //-> Check if all cart items are paid courses
    let allPaid = mergedCart.every(ele=> ele.price > 0)
    console.log(allPaid)  
    console.log("------------------------------")  


//MODULE 4: ROLE & PERMISSION ENGINE
console.log("MODULE 4: ROLE & PERMISSION ENGINE")
  //-> Get all role names
    let roleNames = Object.keys(roles)
    console.log(roleNames)
    console.log("------------------------------")

  //-> Check if student can delete
    let canStudentDelete = roles.student.includes("delete")
    console.log(canStudentDelete)
    console.log("------------------------------")
    
  //-> Create a flat list of all unique permissions
    let allPermissions = new Set()
    Object.values(roles).forEach(permissionList=>{
        permissionList.forEach(permission=>{    
            allPermissions.add(permission)
        })
    })
    console.log(Array.from(allPermissions))
    console.log("------------------------------")   

  //-> Add new role moderator immutably*/
    let newRole = {...roles, moderator:["update","view"]}
    console.log(newRole)
    console.log("------------------------------")