import { formDataTypes, HeadingListType } from "../types/types";

export const headingList: HeadingListType[] = [
     { link: "Home", hoverColor: "text-red-600" },
     { link: "About", hoverColor: "text-red-600" },
     { link: "Blog", hoverColor: "text-red-600" },
     { link: "Services", hoverColor: "text-red-600" },
];

export const formData: formDataTypes[] = [
    {label: "UserName", placeholder: "UserName", type:"email",  name: "username", id: "username"}, {label: "Email", placeholder: "Email", type:"text", name: "email", id: "email"}, {label: "Password", placeholder: "Password", type:"password", name: "password", id: "password"}
]