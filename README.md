
1. To create a React project using vite, Go to File->New -> Project -> Vite -> Select template as React, and tick Typescript Project option.
   Through command line: `npm create vite@latest my-react-app -- --template react`
2. To run a React app created using latest vite version, you need to upgrade your node version to 20.
   `node -v` to check current version.
   `sudo npm install -g n
   sudo n 20
   `
3. Then run `npm install` to install the dependencies.
4. Then you can see there is a script defined in `package.json` called `dev` to start the application.
   `npm run dev`
5. Then you'll have your vite React project running on `http://localhost:5173/`.
6. Let's get familiar with the code structure a bit.
7. Let's clear out the `App.tsx` file, `index.css` file, `App.css` file.
8. Let's create a folder called `view` -> `common` and place the following common components under that.
9. Create folder called `Navbar` and inside that folder please create `Navbar.tsx` file.
```typescript jsx
import './Navbar.css';

export function Navbar() {
 return (
         <div className="navbar">
          This is Navbar!
         </div>
 );
```
Create `Navbar.css` file:
```css
.navbar {
   background-color: rgb(68 69 68);
   color: white;
   padding: 2rem;
   justify-content: center;
   align-items: center;
   text-align: center;
   font-size: 2rem;
   display: flex;
}
```

10. Then add following code in `App.tsx`.
```typescript jsx
function App() {
 return (
    <>
       <Navbar/>
    </>
 )
}
```
11. Create folder called `MainContent` and inside that folder please create `MainContent.tsx` file.
```typescript jsx
import './MainContent.css';

export function MainContent() {
 return (
         <div className="main-content">
          This is Main Content!
         </div>
 );
}
```
Create `MainContent.css` file:
```css
.main-content {
   background-color: rgb(218, 215, 203);
   padding: 2rem;
   align-items: center;
   justify-content: center;
   text-align: center;
   font-size: 2rem;
   min-height: 26rem;
   display: flex;
}
```
12. Then add following code in `App.tsx`.
```typescript jsx
import {MainContent} from "./MainContent";

function App() {

 return (
    <>
       <Navbar/>
       <MainContent/>
    </>
 )
}
```
13. Create folder called `Footer` and inside that folder please create `Footer.tsx` file.
```typescript jsx
import './Footer.css';

export function Footer() {
    return (
        <div className="footer">
            This is Footer!
        </div>
    );
}
```
Create `Footer.css` file:
```css
.footer {
   background-color: rgb(68 69 68);
   color: white;
   padding: 2rem;
   justify-content: center;
   align-items: center;
   text-align: center;
   font-size: 2rem;
   display: flex;
}
```

14. Then add following code in `App.tsx`.
```typescript jsx
function App() {

 return (
         <>
          <Navbar/>
          <MainContent/>
          <Footer/>
         </>
 )
}

```

15. Now let's define some links in Navbar.
```typescript jsx
import './Navbar.css';

export function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}
```
```css
.navbar {
    background-color: rgb(68 69 68);
    padding: 1px;
}

li {
    display: inline-block;
    padding-right: 20px;
}
```
16. Now we're going to create content pages of our application.
17. For that let's create a new folder called `pages` inside `view` folder.
18. Inside `pages` folder let's create a folder called `Home` and add `Home.tsx` inside that.
```typescript jsx
export function Home() {
    return (
        <>
            <h1>This is Home Page!</h1>
        </>
    );
}
```
19. Inside `pages` folder let's create another folder called `About` and add `About.tsx` inside that.
```typescript jsx
export function About() {
    return (
        <>
            <h1>This is About Page!</h1>
        </>
    );
}
```
19. Inside `pages` folder let's create another folder called `Contact` and add `Contact.tsx` inside that.
```typescript jsx
export function Contact() {
    return (
        <>
            <h1>This is Contact Page!</h1>
        </>
    );
}
```
20. Now let's talk about `React Routing` which helps us to enable page navigation.
21. For that you need to install `react-router-dom` using this command: `npm install react-router-dom`.
22. Then add the following code to add routing to content in `App.tsx`.
```typescript jsx
import './MainContent.css';
import * as React from "react";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";
import {Route, Routes} from "react-router-dom";


export function MainContent() {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}
```
23. You need to import `import * as React from "react";` to get support for react element.
24. Then if you see the browser, you'll see an error in the console.
    `Uncaught Error: useRoutes() may be used only in the context of a <Router> component.`
25. For that, you need to wrap `app.tsx` with `<BrowserRouter>`.
```typescript jsx
import './App.css'
import {Navbar} from "./view/common/Navbar/Navbar.tsx";
import {MainContent} from "./view/common/MainContent/MainContent.tsx";
import {Footer} from "./view/common/Footer/Footer.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {

 return (
         <BrowserRouter>
            <Navbar/>
            <MainContent/>
            <Footer/>
         </BrowserRouter>
 )
}

export default App
```
26. Now you can navigate within pages by changing url path using React Routing.
27. To add link to navigate through pages you need to add following code.
```typescript jsx
import './Navbar.css';
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}
```
```css
.navbar {
 background-color: rgb(68 69 68);
 padding: 1px;
}

li {
    display: inline-block;
    padding-right: 20px;
}

li a {
    text-decoration: none;
}
```
28. Previously we had below components in `App.tsx` wrapped by `BrowserRouter`.
```typescript jsx
<BrowserRouter> 
    <Navbar/> 
    <MainContent/> 
    <Footer/>
</BrowserRouter>
```
29. So, if we need to navigate to login page which don't have any of these common components, we need to do some small layout change of this current layout.
30. So, for that we need to extract these common set of components to a separate single component for easy to manage. Let's call it as `DefaultLayout.tsx`
```typescript jsx
export function DefaultLayout() {
     return ( 
          <> 
           <Navbar/> 
           <MainContent/> 
           <Footer/> 
          </>
     );
}
```
31. Let's create new component called `Login`
```typescript jsx
export function Login() { 
   return ( 
      <> 
        <h1>This is Login!</h1> 
      </>
   ); 
}
```
32. Then import and define this newly created `DefaultLayout` component and `Login` component inside `App.tsx`.
```typescript jsx
<BrowserRouter> 
 <Routes> 
  <Route path="/*" Component={DefaultLayout}></Route> 
  <Route path="/login" Component={Login}></Route> 
 </Routes> 
</BrowserRouter>
```
33. Then define a `Link` inside the `Sign-In` button like below to enable navigation to login page
 ```typescript jsx
<Link to="/login">Sign In</Link>
```
34. Now, let's try import some images and render them in the UI using React.
35. For that, let's create a package called `assets` inside `src` and place out image `icon.png` inside that.
36. Now let's try to import this image to our `Navbar.tsx`.
```typescript jsx
import './Navbar.css';
import icon from '../../../assets/icon.png';
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <div className="navbar">
            <img src={icon} className="icon" alt=""/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}
```
```css
.navbar {
    background-color: rgb(68 69 68);
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
}

li {
    display: inline-block;
    padding-right: 20px;
}

li a {
    text-decoration: none;
    color: #f0ecec;
}

li a:hover {
    text-decoration: none;
    color: #42d974;
}

.icon {
    height: 2rem;
    width: 2rem;
}
```
37. Now let's define our application business name.
```typescript jsx
import './Navbar.css';
import icon from '../../../assets/icon.png';
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <div className="navbar">
            <img src={icon} className="icon" alt=""/>
            <p className="business-name">Organic Shop</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}
```
```css
.navbar {
    background-color: rgb(68 69 68);
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
}

li {
    display: inline-block;
    padding-right: 20px;
}

li a {
    text-decoration: none;
    color: #f0ecec;
}

li a:hover {
    text-decoration: none;
    color: #42d974;
}

.icon {
    height: 2rem;
    width: 2rem;
}

.business-name {
    padding-left: 5px;
    color: #f0ecec;
}
```
38. Now let's add a `Sign In` button in the Navbar.
```typescript jsx
import './Navbar.css';
import icon from '../../../assets/icon.png';
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <div className="navbar">
            <img src={icon} className="icon" alt=""/>
            <p className="business-name">Organic Shop</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button className="btn-sign-in">Sign In</button>
        </div>
    );
}
```
```css
.navbar {
    background-color: rgb(68 69 68);
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
}

li {
    display: inline-block;
    padding-right: 20px;
}

li a {
    text-decoration: none;
    color: #f0ecec;
}

li a:hover {
    text-decoration: none;
    color: #42d974;
}

.icon {
    height: 2rem;
    width: 2rem;
}

.business-name {
    padding-left: 5px;
    color: #f0ecec;
}

.btn-sign-in {
    background-color: #1f9e4b;
    color: #f0ecec;
    height: 30px;
    width: 70px;
    border-radius: 10px;
    border-color: white;
}
```
39. Now let's deal with some event handling here with this Sign In button.
```typescript jsx
import './Navbar.css';
import icon from '../../../assets/icon.png';
import {Link} from "react-router-dom";

export function Navbar() {

    const onSignInClick = () => {
        alert("Sign In Clicked!");
    }

    return (
        <div className="navbar">
            <img src={icon} className="icon" alt=""/>
            <p className="business-name">Organic Shop</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button className="btn-sign-in" onClick={onSignInClick}>Sign In</button>
        </div>
    );
}
```
40. Now, Let's finalize our `Footer.tsx` as well.
```typescript jsx
import './Footer.css';
import icon from '../../../assets/icon.png';

export function Footer() {
    return (
        <div className="footer">
            <p className="copyright">Copyright © 2025</p>
            <p className="business-name">Organic Shop</p>
            <img className="icon" src={icon} alt=""/>
        </div>
    );
}
```
```css
.footer {
    background-color: rgb(68 69 68);
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.business-name {
    padding-left: 5px;
    color: #f0ecec;
    padding-right: 5px;
}

.copyright {
    color: #f0ecec;
    font-size: 10px;
}

.icon {
    height: 2rem;
    width: 2rem;
}
```
41. Now let's try out some Form Handling exercise. For this you need to install this dependency.
    `npm install react-hook-form`
42. Let's crate the Contact Us page now.
```typescript jsx
import { useForm } from 'react-hook-form';
import './Contact.css';

type FormData = {
 email: string;
 subject: string;
 message: string;
};

export function Contact() {
 const { register, handleSubmit,
  formState: { errors } }
         = useForm<FormData>();

 const onSubmit = (data: FormData) => {
  console.log('Form Submitted:', data);
  alert(`Submitted case: ${data.subject}!`);
 };

 return (
         <div className="form-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
           <div className="form-group">
            <label>Email:</label>
            <input
                    type="email"
                    {...register('email', {
                     required: 'Email is required',
                     pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email format'
                     }
                    })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
           </div>

           <div className="form-group">
            <label>Subject:</label>
            <input
                    type="text"
                    {...register('subject', {
                     required: 'Subject is required',
                     pattern: {
                      value: /^.{10,30}$/,
                      message: 'Subject must include at least 10 characters and less than 30'
                     }
                    })}
            />
            {errors.subject && <span className="error">{errors.subject.message}</span>}
           </div>

           <div className="form-group">
            <label>Message:</label>
            <textarea rows={5} {...register('message', {
             required: true
            })}/>
            {errors.message && <span className="error">Message is required</span>}
           </div>

           <button type="submit" className="submit-btn">Submit</button>
          </form>
         </div>
 );
}
```
43. Now let's try to configure our project to use Tailwind.css to work with utility classes.
44. Add `tailwind css`, `Tailwind Formatter`, `Tailwind CSS Smart Completions` plugins in IntelliJ IDEA to get IDE support.
45. Clear the `App.css`, `index.css` and all the other css files to remove custom css classes we've written so far.
46. Goto `https://tailwindcss.com/docs/installation` to see instructions for tailwind css.
47. Then click `Using Vite` tab which redirects to `https://tailwindcss.com/docs/installation/using-vite` for instructions for React Project.
48. Install Tailwind css
 ```shell
npm install tailwindcss @tailwindcss/vite
```
49. Add following code inside `vite.config.ts`.
```js
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
        react()
    ],
})
```
50. Add this to top of the `index.css` file.
```css
    @import "tailwindcss";
```
51. Then terminate the app and re-run the project usually using script command defined in `package.json`.
    Command:
```bash
npm run dev
```
52. Let's delete the `Navbar.css` file as we no longer need it and add the tailwind inline css to `Navbar.tsx`.
```typescript jsx
<div className="p-2 bg-[#444544] flex justify-between">
 <div className="flex p-2">
  <h1 className="text-2xl text-[#e6f0e6] hover:text-green-400">
   Organic Shop</h1>
  <img className="h-[2rem] w-[2rem] ml-2 pt-1" src={icon}
       alt=""/>
 </div>
 <ul className="list-none flex mt-2 mb-2">
  <li className="mr-2 text-[1.5rem] text-[#e6f0e6] hover:text-green-400">
   <Link to="/">Home</Link>
  </li>
  <li className="mr-2 text-[1.5rem] text-[#e6f0e6] hover:text-green-400">
   <Link to="/about">About</Link>
  </li>
  <li className="mr-2 text-[1.5rem] text-[#e6f0e6] hover:text-green-400">
   <Link to="/contact">Contact</Link>
  </li>
 </ul>
 <button className="text-[1rem] text-[#e6f0e6] bg-[#1f9e4b] pl-4
                               pr-4 rounded-lg border-white border-2 hover:bg-green-400" onClick={onSignInClick}>Sign In</button>
</div>
```
53. Now let's try to design our Home page in `Home.tsx`.
```typescript jsx
export function Home() {
    return (
        <div>
            <div className="flex flex-wrap ml-[1px] mt-5 mb-5 justify-center items-center mx-auto">
                <div className="w-28 h-32 bg-blue-300 mr-2 mb-2 flex justify-center items-center">
                    01
                </div>
                <div className="w-28 h-32 bg-blue-300 mr-2 mb-2 flex justify-center items-center">
                    02
                </div>
                <div className="w-28 h-32 bg-blue-300 mr-2 mb-2 flex justify-center items-center">
                    03
                </div>

                <div className="w-28 h-32 bg-blue-300 mr-2 mb-2 flex justify-center items-center">
                    04
                </div>
                <div className="w-28 h-32 bg-blue-300 mr-2 mb-2 flex justify-center items-center">
                    05
                </div>
                <div className="w-28 h-32 bg-blue-300 mr-2 mb-2 flex justify-center items-center">
                    06
                </div>
            </div>
        </div>
    );
}
```
54. Then let's create grid product items like below.
```typescript jsx
import spinach from '../../../assets/spinach.png';
import tomato from '../../../assets/tomato.png';
import beans from '../../../assets/beans.png';

export function Home() {
    return (
        <div>
            <div className="flex flex-wrap ml-[1px] mt-5 mb-5 justify-center items-center mx-auto">
                <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                    <div>
                        <img className="h-[88px] w-[88px]" src={spinach} alt=""/>
                    </div>
                    <div className="flex">
                        <div>
                            <h3 className="text-[#1f9e4b] text-[12px] pl-2">
                             Spinach</h3>
                        </div>
                        <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                            <h3 className="text-[12px] pl-1">200 <small className="text-[7px]">LKR</small></h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-full mt-1 p-[2.4px] bg-[#1f9e4b] text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
                    </div>
                </div>

                <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                    <div>
                        <img className="h-[88px] w-[88px]" src={tomato} alt=""/>
                    </div>
                    <div className="flex">
                        <div>
                            <h3 className="text-[#1f9e4b] text-[12px] pl-2">Tomato</h3>
                        </div>
                        <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                            <h3 className="text-[12px] pl-1">300 <small className="text-[7px]">LKR</small></h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-full mt-1 p-[2.4px] bg-[#1f9e4b] text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
                    </div>
                </div>

                <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                    <div>
                        <img className="h-[88px] w-[88px]" src={beans} alt=""/>
                    </div>
                    <div className="flex">
                        <div>
                            <h3 className="text-[#1f9e4b] text-[12px] pl-2">Beans</h3>
                        </div>
                        <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                            <h3 className="text-[12px] pl-1">180 <small className="text-[7px]">LKR</small></h3>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-full mt-1 p-[2.4px] bg-[#1f9e4b] text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
```
55. Now let's see how to load these items dynamically through a json file by extracting this as a new component called "Product".
56. So, create a json file called `product-data.json` inside `public` folder and paste the below code inside it.
```json
[
        {
         "id":  1,
         "name": "Spinach",
         "price": "200",
         "currency": "LKR",
         "image": "spinach.png"
        },
        {
         "id":  2,
         "name": "Tomato",
         "price": "300",
         "currency": "LKR",
         "image": "tomato.png"
        },
        {
         "id":  3,
         "name": "Beans",
         "price": "250",
         "currency": "LKR",
         "image": "beans.png"
        }
]
```
57. Let's extract the product section and create a new common component called `Product`.
```typescript jsx

type ProductData = {
    id: number,
    name: string,
    price: string,
    currency: string,
    image: string
};

type ProductProps = {
    data: ProductData;
};

const images: Record<string, string> = import.meta.glob('../../../assets/*', { eager: true, import: 'default' });

export function Product({ data }: ProductProps) {

    console.log(images);
    console.log(data);
    console.log(`../../../assets/${data.image}`);

    const imageSrc = images[`../../../assets/${data.image}`];

    return (
        <div className="w-28 h-32 mr-2 mb-2 justify-center items-center
        shadow-lg rounded-lg border border-green-200">
            <div>
                <img className="h-[88px] w-[88px]" src={imageSrc} alt=""/>
            </div>
            <div className="flex">
                <div>
                    <h3 className="text-[#1f9e4b] text-[12px] pl-2">{data.name}</h3>
                </div>
                <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                    <h3 className="text-[12px] pl-1">{data.price} <small className="text-[7px]">{data.currency}</small></h3>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="w-full mt-1 p-[2.4px] bg-[#1f9e4b] text-[10px]
                    shadow-lg rounded-lg border border-green-200 text-white">Add to Cart</button>
            </div>
        </div>
    );
}
```
58. Also update the `Home` component like this.
```typescript jsx
import { useEffect, useState } from 'react';
import {Product} from "../../common/Product/Product.tsx";

type ProductData = {
    id: number;
    name: string;
    price: string;
    currency: string;
    image: string;
};


export function Home() {
    const [products, setProducts] = useState<ProductData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./product-data.json');
                const jsonData = await response.json();
                console.log(jsonData);
                setProducts(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="flex flex-wrap ml-[1px] mt-5 mb-5 justify-center items-center mx-auto">
                {products.map((product) => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
}
```
59. Let's create a new package called `model` inside `src` folder and create a model called `CartItem.ts` and `ProductModel.ts` to keep our data.
```typescript
import type {ProductModel} from "./ProductModel.ts";

export interface CartItem {
    product: ProductModel,
    itemCount: number
}
```
```typescript
export interface ProductModel {
    id: number,
    name: string,
    price: number,
    currency: string
}
```
60. Now let's create our `ModifyCart` component inside `common` folder.
```typescript jsx
import React, { useEffect, useState } from "react";
import { CartItem } from "../../../model/CartItem";

// Shared static array outside the component
export const itemsList: CartItem[] = [];

interface ModifyCartProps {
 data: any;
}

export const ModifyCart: React.FC<ModifyCartProps> = ({ data }) => {
 const [itemCount, setItemCount] = useState(1);

 useEffect(() => {
  const existingItem = itemsList.find(item => item.product.id === data.product.id);

  if (existingItem) {
   existingItem.itemCount = itemCount;
  } else if (data.isAdded) {
   itemsList.push({ product: data.product, itemCount });
  }
  console.log(itemsList);
 }, [itemCount, data]);

 const onDecreaseItemCount = () => {
  setItemCount(prev => 
          prev > 1 ? prev - 1 
                  : (alert("Item count can't be less than 1"), prev)
  );
 };

 const onIncreaseItemCount = () => {
  setItemCount(prev => prev + 1);
 };

 return (
         <div className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] text-center">
          <button className="float-left text-[8px] bg-yellow-300 rounded-lg h-3 w-4"
                  onClick={onDecreaseItemCount}>-</button>
          <small className="text-[8px]">{itemCount}</small>
          <button className="float-right text-[8px] bg-yellow-300 rounded-lg h-3 w-4"
                  onClick={onIncreaseItemCount}>+</button>
         </div>
 );
};
```
60. Also, now let's update the `Product` component as well to render this `ModifyCart` inside there.
```typescript jsx
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import {useState} from "react";

type ProductData = {
 id: number,
 name: string,
 price: string,
 currency: string,
 image: string
};

type ProductProps = {
 data: ProductData;
};

const images: Record<string, string> = import.meta.glob('../../../assets/*', { eager: true, import: 'default' });

export function Product({ data }: ProductProps) {

 console.log(images);
 console.log(data);
 console.log(`../../../assets/${data.image}`);

 const [isActive, setIsActive] = useState(false);

 const imageSrc = images[`../../../assets/${data.image}`];

 const addToCartOnClick = () => {
  setIsActive(prev => !prev);
 };

 return (
         <div className="w-28 h-32 mr-2 mb-2 justify-center items-center
        shadow-lg rounded-lg border border-green-200">
          <div>
           <img className="h-[88px] w-[88px]" src={imageSrc} alt=""/>
          </div>
          <div className="flex">
           <div>
            <h3 className="text-[#1f9e4b] text-[12px] pl-2">{data.name}</h3>
           </div>
           <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
            <h3 className="text-[12px] pl-1">{data.price} <small className="text-[7px]">{data.currency}</small></h3>
           </div>
          </div>
          <div className="flex justify-center">
           {isActive ? (
                   <ModifyCart data={{ product: data, isAdded: isActive }} />
           ) : (
                   <button className="w-full mt-1 p-[2.4px] bg-[#1f9e4b] text-[10px]
                    shadow-lg rounded-lg border border-green-200 text-white"
                           onClick={addToCartOnClick}
                   >Add to Cart</button>
           )}
          </div>
         </div>
 );
}
```
1. To, integrate `Redux`, let's install the following necessary dependencies.
```shell
npm install redux react-redux
npm install @reduxjs/toolkit
```
2. Now, let's create the `store.ts` inside a folder called `store` inside `src` folder.
```typescript
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```
3. Also, let's provide the `store` to the `Provider` in `main.tsx` file.
```typescript jsx
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
);
```
4. Also, let's update our model `Product.tsx` as below to include all fields.
```typescript
export interface ProductData {
    id: number,
    name: string,
    price: number,
    currency: string,
    image: string
}
```
5. Now, let's create a new folder called `slices` and extract out the functionality from the `Home.tsx` into `productSlice.ts` inside that.
```typescript
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

interface ProductsState {
 list: [];
 error: string | null | undefined;
}

const initialState: ProductsState = {
 list: [],
 error: null
};

export const getAllProducts = createAsyncThunk(
        'products/getAllProducts',
        async () => {
         const response = await fetch('./product-data.json');
         return await response.json();
        }
);

const productsSlice = createSlice({
 name: 'products',
 initialState: initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
          // Async Response Pending State
          .addCase(getAllProducts.pending,
                  () => {
              alert("Products are still loading..")
          })
          // Async Response Complete State
          .addCase(getAllProducts.fulfilled,
                  (state, action) => {
              state.list = action.payload;
          })
          // Async Response Failure State
          .addCase(getAllProducts.rejected,
                  (state, action) => {
             state.error = action.error.message;
             alert("Error: " + state.error)
          });
 }
});

export default productsSlice.reducer;
```
6. Now, let's update `store.ts` as below to keep `Products` related details.
```typescript
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './../slices/productSlice';
import cartReducer from './../slices/cartSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

1. Then, let's update the `Home.tsx` as below to call the `productsSlice.ts`.
```typescript jsx
import {useEffect} from "react";
import {Product} from "../../common/Product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {getAllProducts} from "../../../slices/productsSlice.ts";

export function Home() {
    const dispatch = useDispatch<AppDispatch>(); // Get Dispatch function
    const {list} = useSelector((state: RootState) => state.products); // Get product state from the store

    useEffect(() => {
        dispatch(getAllProducts()); // Trigger Get All Products
    }, []);

    return (
        <div>
            <div className="flex flex-wrap ml-[1px] mt-5 mb-5
                            justify-center items-center mx-auto">
                {
                    // Loop the products list taken from the store
                    list.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }
            </div>
        </div>
    );
}
```
2. Also, let's update the `Product.tsx` props type to `import type {ProductData} from "../../../model/ProductData.ts";`.
```typescript jsx
import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";

type ProductProps = {
    data: ProductData
}

const images: Record<string, string>
    = import.meta.glob('../../../assets/products/*',
    {eager: true, import: 'default'});

export function Product({data}: ProductProps) {
    const image = images[`../../../assets/products/${data.image}`];

    const [isActive, setIsActive] = useState(false);
    const addToCart = () => {
        setIsActive(true);
    }

    return (
        <div className="w-32 h-40 mr-2 mb-2 justify-center items-center
                               shadow-lg rounded-lg border border-green-300
                               hover:bg-green-200">
            <div>
                <img className="h-[90px] w-[90px]"
                     src={image} alt=""/>
            </div>
            <div className="flex mt-2">
                <div>
                    <h3 className="text-[#1f9e4b]
                                          text-[14px] pl-2 pr-2">
                        {data.name}</h3>
                </div>
                <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                    <h3 className="text-[12px] pl-1">{data.price}
                        <small className="text-[7px] pl-1">{data.currency}</small></h3>
                </div>
            </div>
            <div className="flex justify-center">
                {
                    isActive ? (
                        <ModifyCart data={data}/>
                    ) : (
                        <button className="w-full mt-4
                            p-[2.4px] bg-[#1f9e4b] text-[12px]
                            text-white border-gray-500 border-[0.5px] rounded-lg h-6
                            cursor-pointer"
                                onClick={addToCart}>Add to Cart
                        </button>
                    )
                }
            </div>
        </div>
    );
}
```
3. As of now, our product listing should work fine in `Home.tsx`.

4. Now, let's define `cartSlice.ts` file inside the `slices` folder by extracting Add/Modify cart related logic.
```typescript
import type {CartItem} from "../model/CartItem.ts";
import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {ProductData} from "../model/ProductData.ts";

interface CartState {
    items: CartItem[];
}
const initialState: CartState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemToCart(state: CartState, action: PayloadAction<ProductData>) { // Please use PayloadAction<ProductData> to prevent the error
            const existingItem = state.items.find(
                (item) => item.product.id === action.payload.id
            );
            if (!existingItem) {
                state.items.push({
                    product: action.payload,
                    itemCount: 1
                })
            }
        }
    }
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
```
5. Now, let's update `store.ts` file as below to keep `ShoppingCart` related details.
```typescript
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './../slices/productsSlice';
import cartReducer from './../slices/cartSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```
6. Now you can see that there are multiple reducers configured.
   So, here we can extract out reducers for combine them to a separate
   file called `rootReducer.ts` inside `slices`.
```typescript
// rootReducer.ts
import { combineReducers } from 'redux';
import productsReducer from "./productsSlice.ts";
import cartReducer from "./cartSlice.ts";

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;
```
and update `store.ts` as below.
```typescript
import { configureStore } from '@reduxjs/toolkit';
import {rootReducer} from "../slices/rootReducer.ts";

export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
```
7. Let's update `Product.tsx` to add new item to cart as below.
```typescript jsx
import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../store/store.ts";
import {addItemToCart} from "../../../slices/cartSlice.ts";

type ProductProps = {
    data: ProductData
}

const images: Record<string, string>
    = import.meta.glob('../../../assets/products/*', {eager: true, import: 'default'});

export function Product({data}: ProductProps) {
    const image = images[`../../../assets/products/${data.image}`];
    const dispatch = useDispatch<AppDispatch>();

    const [isActive, setIsActive] = useState(false);
    const addToCart = () => {
        dispatch(addItemToCart(data));
        setIsActive(true);
    }

    return (
        <div className="w-[14rem] h-[17.2rem] mr-2 mb-2 justify-center items-center
                               shadow-lg rounded-lg border border-green-300
                               hover:bg-green-200">
            <div>
                <img className="h-[10rem] w-[10rem]"
                     src={image} alt=""/>
            </div>
            <div className="flex mt-2">
                <div>
                    <h3 className="text-[#1f9e4b]
                                          text-[2rem] pl-2 pr-2">
                        {data.name}</h3>
                </div>
                <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                    <h3 className="text-[1.4rem] pl-1">{data.price}
                        <small className="text-[0.8rem] pl-1">{data.currency}</small></h3>
                </div>
            </div>
            <div className="flex justify-center">
                {
                    isActive ? (
                        <ModifyCart data={data}/>
                    ) : (
                        <button className="w-full mt-4
                            p-[0.5rem] bg-[#1f9e4b] text-[1rem]
                            text-white border-gray-500 border-[0.5px] rounded-lg
                            cursor-pointer"
                                onClick={addToCart}>Add to Cart
                        </button>
                    )
                }
            </div>
        </div>
    );
}
```
1. Then, let's update the `Home.tsx` as below to call the `productsSlice.ts`.
```typescript jsx
import {useEffect} from "react";
import {Product} from "../../common/Product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {getAllProducts} from "../../../slices/productsSlice.ts";

export function Home() {
    const dispatch = useDispatch<AppDispatch>(); // Get Dispatch function
    const {list} = useSelector((state: RootState) => state.products); // Get product state from the store

    useEffect(() => {
        dispatch(getAllProducts()); // Trigger Get All Products
    }, []);

    return (
        <div>
            <div className="flex flex-wrap ml-[1px] mt-5 mb-5
                            justify-center items-center mx-auto">
                {
                    // Loop the products list taken from the store
                    list.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }
            </div>
        </div>
    );
}
```
2. Also, let's update the `Product.tsx` props type to `import type {ProductData} from "../../../model/ProductData.ts";`.
```typescript jsx
import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";

type ProductProps = {
    data: ProductData
}

const images: Record<string, string>
    = import.meta.glob('../../../assets/products/*',
    {eager: true, import: 'default'});

export function Product({data}: ProductProps) {
    const image = images[`../../../assets/products/${data.image}`];

    const [isActive, setIsActive] = useState(false);
    const addToCart = () => {
        setIsActive(true);
    }

    return (
        <div className="w-32 h-40 mr-2 mb-2 justify-center items-center
                               shadow-lg rounded-lg border border-green-300
                               hover:bg-green-200">
            <div>
                <img className="h-[90px] w-[90px]"
                     src={image} alt=""/>
            </div>
            <div className="flex mt-2">
                <div>
                    <h3 className="text-[#1f9e4b]
                                          text-[14px] pl-2 pr-2">
                        {data.name}</h3>
                </div>
                <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                    <h3 className="text-[12px] pl-1">{data.price}
                        <small className="text-[7px] pl-1">{data.currency}</small></h3>
                </div>
            </div>
            <div className="flex justify-center">
                {
                    isActive ? (
                        <ModifyCart data={data}/>
                    ) : (
                        <button className="w-full mt-4
                            p-[2.4px] bg-[#1f9e4b] text-[12px]
                            text-white border-gray-500 border-[0.5px] rounded-lg h-6
                            cursor-pointer"
                                onClick={addToCart}>Add to Cart
                        </button>
                    )
                }
            </div>
        </div>
    );
}
```
3. As of now, our product listing should work fine in `Home.tsx`.

4. Now, let's define `cartSlice.ts` file inside the `slices` folder by extracting Add/Modify cart related logic.
```typescript
import type {CartItem} from "../model/CartItem.ts";
import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {ProductData} from "../model/ProductData.ts";

interface CartState {
    items: CartItem[];
}
const initialState: CartState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemToCart(state: CartState, action: PayloadAction<ProductData>) { // Please use PayloadAction<ProductData> to prevent the error
            const existingItem = state.items.find(
                (item) => item.product.id === action.payload.id
            );
            if (!existingItem) {
                state.items.push({
                    product: action.payload,
                    itemCount: 1
                })
            }
        }
    }
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
```
5. Now, let's update `store.ts` file as below to keep `ShoppingCart` related details.
```typescript
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './../slices/productsSlice';
import cartReducer from './../slices/cartSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```
6. Now you can see that there are multiple reducers configured.
   So, here we can extract out reducers for combine them to a separate
   file called `rootReducer.ts` inside `slices`.
```typescript
// rootReducer.ts
import { combineReducers } from 'redux';
import productsReducer from "./productsSlice.ts";
import cartReducer from "./cartSlice.ts";

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;
```
and update `store.ts` as below.
```typescript
import { configureStore } from '@reduxjs/toolkit';
import {rootReducer} from "../slices/rootReducer.ts";

export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
```
7. Let's update `Product.tsx` to add new item to cart as below.
```typescript jsx
import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../store/store.ts";
import {addItemToCart} from "../../../slices/cartSlice.ts";

type ProductProps = {
    data: ProductData
}

const images: Record<string, string>
    = import.meta.glob('../../../assets/products/*', {eager: true, import: 'default'});

export function Product({data}: ProductProps) {
    const image = images[`../../../assets/products/${data.image}`];
    const dispatch = useDispatch<AppDispatch>();

    const [isActive, setIsActive] = useState(false);
    const addToCart = () => {
        dispatch(addItemToCart(data));
        setIsActive(true);
    }

    return (
        <div className="w-[14rem] h-[17.2rem] mr-2 mb-2 justify-center items-center
                               shadow-lg rounded-lg border border-green-300
                               hover:bg-green-200">
            <div>
                <img className="h-[10rem] w-[10rem]"
                     src={image} alt=""/>
            </div>
            <div className="flex mt-2">
                <div>
                    <h3 className="text-[#1f9e4b]
                                          text-[2rem] pl-2 pr-2">
                        {data.name}</h3>
                </div>
                <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                    <h3 className="text-[1.4rem] pl-1">{data.price}
                        <small className="text-[0.8rem] pl-1">{data.currency}</small></h3>
                </div>
            </div>
            <div className="flex justify-center">
                {
                    isActive ? (
                        <ModifyCart data={data}/>
                    ) : (
                        <button className="w-full mt-4
                            p-[0.5rem] bg-[#1f9e4b] text-[1rem]
                            text-white border-gray-500 border-[0.5px] rounded-lg
                            cursor-pointer"
                                onClick={addToCart}>Add to Cart
                        </button>
                    )
                }
            </div>
        </div>
    );
}
```


