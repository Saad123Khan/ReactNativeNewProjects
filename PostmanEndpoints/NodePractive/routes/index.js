import error from "#middleware/error";
import userRoute from "#routes/userRoute";

const routes = (app)=>{
    app.use('/api',userRoute);
    app.use(error);  
}

export default routes;