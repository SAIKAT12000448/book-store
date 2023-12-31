
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Textarea } from './ui/textarea';
// import { FiSend } from 'react-icons/fi';
// import { useAppDispatch, useAppSelector } from '@/redux/hooks';
// import { useEffect } from 'react';



// export default function ProductReview() {
//   const comments = useAppSelector((state) => state.comments); 
//   const dispatch = useAppDispatch();

//   useEffect(() => {   
//     dispatch(fetchComments()); 
//   }, [dispatch]);
  

//   return (
//     <div className="max-w-7xl mx-auto mt-5">
//       <div className="flex gap-5 items-center">
//         <Textarea className="min-h-[30px]" />
//         <Button className="rounded-full h-10 w-10 p-2 text-[25px]">
//           <FiSend />
//         </Button>
//       </div>
//       <div className="mt-10">
//         {dummyComments.map((comment, index) => (
//           <div key={index} className="flex gap-3 items-center mb-5">
//             <Avatar>
//               <AvatarImage src="https://github.com/shadcn.png" />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>
//             <p>{comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
