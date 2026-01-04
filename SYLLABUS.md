# Job Portfolio Website Backend - Complete Syllabus
## Step-by-Step Learning Path (30 Days)

---

## **Week 1: Foundation & Setup (Days 1-7)**

### **Day 1: Introduction & Environment Setup**
**Topics:**
- Introduction to Node.js and Express.js
- Setting up development environment
- Installing Node.js, npm, and VS Code
- Creating project structure
- Understanding package.json

**Practical Tasks:**
- Install Node.js and npm
- Create project folder
- Initialize npm project
- Install Express.js
- Create basic server.js file
- Run first "Hello World" server

**Deliverable:** Working Express server on localhost:3000

---

### **Day 2: Express.js Basics**
**Topics:**
- Express.js fundamentals
- Creating routes (GET, POST, PUT, DELETE)
- Request and Response objects
- Middleware concepts
- CORS setup

**Practical Tasks:**
- Create multiple routes
- Handle different HTTP methods
- Add CORS middleware
- Create route handlers
- Test routes with Postman/Thunder Client

**Deliverable:** Server with multiple routes working

---

### **Day 3: Environment Variables & Configuration**
**Topics:**
- What are environment variables
- Using .env files
- dotenv package
- .gitignore setup
- Configuration management

**Practical Tasks:**
- Install dotenv
- Create .env file
- Add PORT and other configs
- Update server to use env variables
- Add .env to .gitignore

**Deliverable:** Server using environment variables

---

### **Day 4: Introduction to Databases**
**Topics:**
- What is a database?
- SQL vs NoSQL
- PostgreSQL introduction
- Supabase setup
- Database connection strings

**Practical Tasks:**
- Create Supabase account
- Create new project
- Get database connection string
- Understand connection URL format
- Test database connection

**Deliverable:** Database connection established

---

### **Day 5: Sequelize ORM Introduction**
**Topics:**
- What is an ORM?
- Sequelize basics
- Installing Sequelize
- Database connection setup
- Understanding models

**Practical Tasks:**
- Install Sequelize and pg packages
- Create config/db.js
- Connect to database
- Test connection
- Understand Sequelize syntax

**Deliverable:** Sequelize connected to database

---

### **Day 6: Creating Your First Model**
**Topics:**
- What is a model?
- DataTypes in Sequelize
- Model definition
- Field properties (allowNull, unique, etc.)
- Primary keys and UUIDs

**Practical Tasks:**
- Create User model
- Define fields (name, email, password, role)
- Set field constraints
- Export model
- Understand model structure

**Deliverable:** User model created

---

### **Day 7: Database Synchronization**
**Topics:**
- What is sync?
- Creating tables automatically
- alter vs force options
- Timestamps
- Model relationships (introduction)

**Practical Tasks:**
- Sync User model to database
- Check table in Supabase
- Understand createdAt/updatedAt
- Test model creation
- Review Week 1 progress

**Deliverable:** User table created in database

---

## **Week 2: Authentication & User Management (Days 8-14)**

### **Day 8: Password Hashing**
**Topics:**
- Why hash passwords?
- bcryptjs package
- Hashing vs Encryption
- Salt rounds
- Password security best practices

**Practical Tasks:**
- Install bcryptjs
- Create password hashing function
- Hash password before saving
- Test password hashing
- Compare hashed passwords

**Deliverable:** Password hashing implemented

---

### **Day 9: User Registration API**
**Topics:**
- POST request handling
- Request body parsing
- Input validation basics
- Error handling
- HTTP status codes

**Practical Tasks:**
- Create POST /api/register route
- Validate input (name, email, password)
- Hash password
- Save user to database
- Return success/error response

**Deliverable:** User registration endpoint working

---

### **Day 10: User Login API**
**Topics:**
- Authentication concepts
- Password verification
- Finding users in database
- JWT tokens introduction
- Session vs Token authentication

**Practical Tasks:**
- Create POST /api/login route
- Find user by email
- Compare passwords
- Return user data
- Handle invalid credentials

**Deliverable:** User login endpoint working

---

### **Day 11: JWT Tokens**
**Topics:**
- What is JWT?
- Token structure
- jsonwebtoken package
- Creating tokens
- Token expiration

**Practical Tasks:**
- Install jsonwebtoken
- Create token generation function
- Add token to login response
- Set token expiration
- Understand token payload

**Deliverable:** JWT tokens generated on login

---

### **Day 12: Authentication Middleware**
**Topics:**
- What is middleware?
- Protecting routes
- Token verification
- Extracting user from token
- Request object modification

**Practical Tasks:**
- Create auth middleware
- Verify JWT token
- Extract user ID from token
- Add user to request object
- Protect routes with middleware

**Deliverable:** Protected routes working

---

### **Day 13: User Profile APIs**
**Topics:**
- GET user profile
- UPDATE user profile
- Authorization (own profile only)
- Field updates
- Error handling

**Practical Tasks:**
- Create GET /api/profile route
- Create PUT /api/profile route
- Get user from database
- Update user fields
- Return updated user

**Deliverable:** Profile endpoints working

---

### **Day 14: Input Validation**
**Topics:**
- Why validate input?
- Validation libraries (express-validator or Zod)
- Email validation
- Password strength
- Error messages

**Practical Tasks:**
- Install validation library
- Add email format validation
- Add password length validation
- Validate required fields
- Return validation errors

**Deliverable:** Input validation implemented

---

## **Week 3: Job Management (Days 15-21)**

### **Day 15: Job Model Creation**
**Topics:**
- Job entity design
- Required fields
- Data types for jobs
- Relationships (User to Job)
- Foreign keys

**Practical Tasks:**
- Create Job model
- Define fields (title, description, salary, location, etc.)
- Set up User-Job relationship
- Add company information
- Sync Job model

**Deliverable:** Job model and table created

---

### **Day 16: Create Job API**
**Topics:**
- POST job creation
- User authorization (only job providers)
- Job data validation
- Saving jobs
- Error handling

**Practical Tasks:**
- Create POST /api/jobs route
- Check user role (jobprovider)
- Validate job data
- Save job to database
- Link job to user

**Deliverable:** Job creation endpoint working

---

### **Day 17: Get All Jobs API**
**Topics:**
- GET all records
- Pagination basics
- Filtering jobs
- Sorting results
- Including related data

**Practical Tasks:**
- Create GET /api/jobs route
- Fetch all jobs
- Add pagination (limit, offset)
- Filter by location/role
- Return jobs with user info

**Deliverable:** Jobs listing endpoint working

---

### **Day 18: Get Single Job API**
**Topics:**
- GET by ID
- Route parameters
- Finding single record
- Including relationships
- 404 error handling

**Practical Tasks:**
- Create GET /api/jobs/:id route
- Find job by ID
- Include user/company info
- Handle not found
- Return job details

**Deliverable:** Single job endpoint working

---

### **Day 19: Update & Delete Job APIs**
**Topics:**
- PUT/PATCH requests
- DELETE requests
- Authorization (own jobs only)
- Updating records
- Soft delete vs hard delete

**Practical Tasks:**
- Create PUT /api/jobs/:id route
- Create DELETE /api/jobs/:id route
- Check job ownership
- Update job fields
- Delete job

**Deliverable:** Update and delete endpoints working

---

### **Day 20: Job Search & Filtering**
**Topics:**
- Search functionality
- Sequelize query operators
- Filtering by multiple criteria
- Case-insensitive search
- Combining filters

**Practical Tasks:**
- Add search by title
- Filter by location
- Filter by salary range
- Filter by job type
- Combine multiple filters

**Deliverable:** Advanced job search working

---

### **Day 21: Job Categories**
**Topics:**
- Category model
- Many-to-one relationship
- Category assignment
- Filtering by category
- Category management

**Practical Tasks:**
- Create Category model
- Link jobs to categories
- Add category to job creation
- Filter jobs by category
- Get jobs with categories

**Deliverable:** Category system implemented

---

## **Week 4: Applications & Advanced Features (Days 22-28)**

### **Day 22: Application Model**
**Topics:**
- Application entity
- Relationships (User, Job, Application)
- Application status
- Many-to-many concepts
- Model associations

**Practical Tasks:**
- Create Application model
- Set up relationships
- Define status field
- Add application date
- Sync Application model

**Deliverable:** Application model created

---

### **Day 23: Apply for Job API**
**Topics:**
- Creating applications
- Checking duplicates
- Job availability
- User authorization (job seekers only)
- Application data

**Practical Tasks:**
- Create POST /api/applications route
- Check if already applied
- Verify job exists
- Save application
- Return application data

**Deliverable:** Job application endpoint working

---

### **Day 24: Get Applications APIs**
**Topics:**
- User's applications
- Job's applications
- Authorization checks
- Including related data
- Filtering applications

**Practical Tasks:**
- Create GET /api/applications/my-applications
- Create GET /api/applications/job/:jobId
- Filter by user
- Filter by job
- Include job/user details

**Deliverable:** Application listing endpoints working

---

### **Day 25: Update Application Status**
**Topics:**
- Status management
- Authorization (job provider only)
- Status transitions
- Updating records
- Notifications (introduction)

**Practical Tasks:**
- Create PUT /api/applications/:id/status
- Check authorization
- Update application status
- Validate status values
- Return updated application

**Deliverable:** Status update endpoint working

---

### **Day 26: Error Handling**
**Topics:**
- Centralized error handling
- Error types
- Custom error messages
- HTTP status codes
- Error middleware

**Practical Tasks:**
- Create error handler middleware
- Handle validation errors
- Handle database errors
- Handle authentication errors
- Return proper error responses

**Deliverable:** Error handling system implemented

---

### **Day 27: File Upload (Resume)**
**Topics:**
- File upload concepts
- multer package
- File storage
- File validation
- File paths in database

**Practical Tasks:**
- Install multer
- Create upload middleware
- Handle file upload
- Save file path to database
- Serve uploaded files

**Deliverable:** Resume upload working

---

### **Day 28: API Documentation**
**Topics:**
- Why document APIs?
- API documentation tools
- Endpoint documentation
- Request/response examples
- Testing APIs

**Practical Tasks:**
- Document all endpoints
- Create API collection (Postman)
- Add request examples
- Add response examples
- Test all endpoints

**Deliverable:** Complete API documentation

---

## **Week 5: Testing & Deployment (Days 29-30)**

### **Day 29: Testing**
**Topics:**
- Why test?
- Unit testing
- Integration testing
- Testing tools
- Writing test cases

**Practical Tasks:**
- Install testing framework
- Write tests for models
- Write tests for routes
- Test authentication
- Run test suite

**Deliverable:** Basic test suite working

---

### **Day 30: Deployment & Final Project**
**Topics:**
- Deployment options
- Environment setup
- Production configuration
- Database migration
- Final project review

**Practical Tasks:**
- Prepare for deployment
- Set production environment
- Review all features
- Fix any bugs
- Deploy backend

**Deliverable:** Deployed backend application

---

## **Additional Topics (Optional/Advanced)**

### **Bonus Topics:**
- Email verification
- Password reset
- Rate limiting
- Caching
- Logging
- API versioning
- WebSockets (real-time notifications)
- Background jobs
- API rate limiting
- Database indexing
- Performance optimization

---

## **Daily Structure Template**

### **For Each Day:**
1. **Theory (30 mins):** Explain concepts
2. **Live Coding (60 mins):** Build together
3. **Practice (30 mins):** Students code
4. **Review (15 mins):** Q&A and recap
5. **Assignment (15 mins):** Homework task

**Total: ~2.5 hours per day**

---

## **Project Milestones**

### **Milestone 1 (Day 7):** Basic Setup Complete
- Server running
- Database connected
- User model created

### **Milestone 2 (Day 14):** Authentication Complete
- User registration
- User login
- JWT tokens
- Protected routes

### **Milestone 3 (Day 21):** Job Management Complete
- Create jobs
- List jobs
- Update/delete jobs
- Search and filter

### **Milestone 4 (Day 28):** Full Backend Complete
- All features implemented
- Error handling
- File uploads
- Documentation

### **Milestone 5 (Day 30):** Production Ready
- Tested
- Deployed
- Complete project

---

## **Learning Resources**

### **Essential Packages:**
- express
- sequelize
- pg (PostgreSQL)
- dotenv
- bcryptjs
- jsonwebtoken
- cors
- multer (file uploads)

### **Development Tools:**
- Postman / Thunder Client
- VS Code
- Git
- Supabase Dashboard

### **Documentation:**
- Express.js docs
- Sequelize docs
- Node.js docs
- Supabase docs

---

## **Assessment Criteria**

### **Daily Assessment:**
- Code completion
- Understanding concepts
- Asking questions
- Practice exercises

### **Weekly Assessment:**
- Weekly project
- Code review
- Quiz/test
- Presentation

### **Final Assessment:**
- Complete backend project
- All features working
- Code quality
- Documentation
- Deployment

---

## **Tips for Teaching**

1. **Start Simple:** Build complexity gradually
2. **Hands-On:** More coding, less theory
3. **Real Examples:** Use job portal context
4. **Debug Together:** Show how to fix errors
5. **Encourage Questions:** Create safe learning environment
6. **Review Regularly:** Recap previous days
7. **Practice:** Give exercises after each topic
8. **Projects:** Build real features, not just examples

---

## **Student Prerequisites**

- Basic JavaScript knowledge
- Understanding of HTTP (GET, POST, etc.)
- Basic command line usage
- Text editor familiarity

---

**Good Luck with Teaching! 🎓**

This syllabus provides a complete 30-day roadmap for building a job portfolio website backend from scratch. Adjust the pace based on your students' learning speed.

