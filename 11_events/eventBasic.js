// javascript code runs sequentially
// there are some exception like asynchronous
// like asynchronous there are events where code does not run sequentially
// events occurs on some activities  like click, hover, submit e.t.c.



// Approach 1 to write event on the html element 
// we directly write event inside the html tag 
// suppose we want to write onclick event on li element which has id as "owl" inside one.html
// if we will click owl image on web page then owl popup will come
// <li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" onclick="alert('Owl')" ></li>
// Not recommended in JS, we can use this approach in ReachJs




// Approach 2 writing event inside <script> tag or inside JS file
// first way

// document.getElementById("owl").onclick = function () {
//     alert('Owl clicked')
// }

// above approach is also not recommended because it gives less features





// Approach 3 writing event inside <script> tag or inside JS file
// second way (Best approach)
// here we will use event listner so that we can listen so many events

// document.getElementById("owl").addEventListener('click', function () {
//     alert('Owl clicked 3rd time')
// }, false)

// in event listner we need to pass 3 parameters (event, return back function, false/true)







// there was some way to attach event which is not in use at present
// attachEvent()      // (not in use)


// jquery in old days but not in use like, on









// we need to study about some important events written below

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode









// document.getElementById("owl").addEventListener('click', function (e) {
//     console.log(e);
// }, false)

// e will return PointerEvent object








// event propagation
// there are two event propagation
// event bubbling (false) and event capturing (true)
// most of the times we use false or default which is event bubbling, but sometimes we use event capturing also
//here  we will take 2 examples to understand
// bubbling mode(false or default)

// document.getElementById("images").addEventListener('click', function (e) {
//     console.log('Clicked inside the images or ul tag');
// }, false)

// document.getElementById("owl").addEventListener('click', function (e) {
//     console.log('clicked owl');
// }, false)


// On the above code we are selecting two id's  images (ul tag) and owl (li tag which is inside ul tag)
// in browser if we click any where(inside ul element) except owl it will print 'Clicked inside the images or ul tag'
// if we will click on owl(li tag), which is also inside images(ul tag), it will print both first 'clicked owl' and then 'Clicked inside the images or ul tag'
// bubbling means it will go lower to upper like a bubble







//capturing mode (true)

// document.getElementById("images").addEventListener('click', function (e) {
//     console.log('Clicked inside the images or ul tag');
// }, true)

// document.getElementById("owl").addEventListener('click', function (e) {
//     console.log('clicked owl');
// }, true)


// On the above code we are selecting two id's  images (ul tag) and owl (li tag which is inside ul tag)
// in browser if we click any where(inside ul element) except owl it will print 'Clicked inside the images or ul tag'
// if we will click on owl(li tag), which is also inside images(ul tag), it will print both first 'Clicked inside the images or ul tag' and then 'clicked owl'
// capturing mode means it will go upper to lower




// we can use bubbling or capturing mode based on our project requirement




// if we dont propagation(bubbling) then we have one method to stop propagation
//

// document.getElementById("images").addEventListener('click', function (e) {
//     console.log('Clicked inside the images or ul tag');
// }, false)

// document.getElementById("owl").addEventListener('click', function (e) {
//     console.log('clicked owl');
//     e.stopPropagation()
// }, false)


// now in browser if we click any where(inside ul element) except owl it will print 'Clicked inside the images or ul tag'
// now if we will click on owl(li tag), which is also inside images(ul tag), it will only print 'clicked owl' , because of e.stopPropagation() used






// prevent default

// document.getElementById("google").addEventListener('click', function (e) {
//     console.log('google link clicked');
//     e.stopPropagation()
// }, false)

// there is one link for the google website inside the browser, currently if we click on that link it will take on google page 
                                                                                // and then it will print google link clicked





// Suppose if we want to print only google link clicked  after clicking on the link and dont want to go to google page
// then we use  e.preventDefault() method 

// document.getElementById("google").addEventListener('click', function (e) {
//     e.preventDefault()
//     console.log('google link clicked');
//     e.stopPropagation()
// }, false)








// we will do one small project
// if we will click on any image then it shoud get deleted
// image tag is inside li tag so we will select parent of image tag on click and delete that whole li tag
// then we will apply method to remove
// we can directly apply remove() method  (recommended method) (it is new method so not much in use)

// document.querySelector('#images').addEventListener("click", function (e) {
//     console.log(e.target.parentNode);  // to select the parent node of clicked node
//     let removeElement = e.target.parentNode  // selecting parent of clicked node
//     removeElement.remove()   // removing selected node
// })


// we can also use removeChild() method and pass the parent to remove (little confusing)
// we can use any of the method either remove() or removeChild(removeElement) both are good
// here removeElement has li tag then its parentNode is ul then removeChild(removeElement) will remove the child(li) of ul on which image tag we will click 

// document.querySelector('#images').addEventListener("click", function (e) {
//     console.log(e.target.parentNode);  // to select the parent node of clicked node
//     let removeElement = e.target.parentNode  // selecting parent of clicked node
//     removeElement.parentNode.removeChild(removeElement)  // removing selected node
// })


// but if we will click on li node by mistake, then it will select ul and remove whole ul element 
// this is called as event spill-over
// to prevent those mistake we will use if
// we will check if tag is IMG then we will perform removal operation otherwise not

// document.querySelector('#images').addEventListener("click", function (e) {
//     console.log(e.target.tagName);  // to select the clicked tag name
//     if (e.target.tagName === 'IMG') {
        
//         let removeElement = e.target.parentNode  // selecting parent of clicked node
//         removeElement.remove()   // removing selected node
//     }
// })








