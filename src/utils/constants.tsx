import { GoPerson } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { CiUser, CiSettings, CiLogout } from "react-icons/ci";

export const properties = [
  { propName: "physical props" },
  { propName: "chemical props" },
];

export const physicalProps = [
  { physPropName: "water absoprtion" },
  { physPropName: "moisture content" },
  { physPropName: "particle size distribution" },
  { physPropName: "density" },
  { physPropName: "apparent porosity" },
  { physPropName: "compressive strength" },
];

export const physChemImg = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1609881583302-61548332039c?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    physPropChoice: "water absorption",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1595446472632-9a3dfdd51bd9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    physPropChoice: "particle size distribution",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1555181937-efe4e074a301?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    physPropChoice: "apparent porosity",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1599833114852-724119b27cd0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    physPropChoice: "moisture content",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1422246358533-95dcd3d48961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    physPropChoice: "density",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1532570204726-145c7199f10e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    physPropChoice: "compressive strength",
  },
];

export const formLabel = [
  { label: "sample name" },
  { label: "wet weight" },
  { label: "dry weight" },
  { label: "first name" },
  { label: "last name" },
  { label: "email" },
  { label: "year" },
  { label: "course" },
  { label: "password" },
];

export const physPropsContent = [
  {
    propName: "water absorption",
    formContent: [
      { label: "sample name", shortLabel: "sample name" },
      { label: "wet weight", shortLabel: "wet wt." },
      { label: "dried weight", shortLabel: "dried wt." },
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1609881583302-61548332039c?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    propName: "apparent porosity",
    formContent: [
      { label: "sample name", shortLabel: "sample name" },
      { label: "soaked weight", shortLabel: "wet wt." },
      { label: "dried weight", shortLabel: "dried wt." },
      { label: "suspended weight", shortLabel: "susp. wt." },
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1599833114852-724119b27cd0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    propName: "moisture content",
    formContent: [
      { label: "sample name", shortLabel: "sample name" },
      { label: "wet weight", shortLabel: "wet wt." },
      { label: "dried weight", shortLabel: "dried wt." },
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1599833114852-724119b27cd0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const tableHeader = [
  { th: "sample name" },
  { th: "wet wt." },
  { th: "dried wt." },
  { th: "%MC" },
  { th: "status" },
];

export const profileDropdownContent = [
  {
    label: "profile",
    icon: <GoPerson />,
    path: "/profile",
  },
  {
    label: "dark mode",
    icon: <IoMoonOutline />,
    path: null,
  },
  {
    label: "logout",
    icon: <IoIosLogOut />,
    path: "/logout",
  },
];

export const profileSidebarLinks = [
  {
    label: "your profile",
    icon: <CiUser />,
    path: "/profile",
  },
  {
    label: "account settings",
    icon: <CiSettings />,
    path: "/account-settings",
  },
  {
    label: "logout",
    icon: <CiLogout />,
    path: "/logout",
  },
];

export const formulaContent = [
  {
    propName: "water absorption",
    formula: "$$MC=({m_w - m_d}/{m_d}) * 100\\%$$",
    labelName: "$$MC=\\text{Moisture Content}$$",
  },
];

// Interface
export interface physChemPropsType {
  physPropName: string;
}

export interface propertiesType {
  propName: string;
}

export interface physChemImgType {
  imgUrl: string;
  physPropChoice: string;
}

export interface formLabelType {
  label: string;
}

export interface propsContentType {
  propName: string;
  formContent?: propsFormContentType[];
  imgUrl: string;
}

export interface propsFormContentType {
  label: string;
  shortLabel?: string;
}

export interface tableDataType {
  sampleName: string;
  wetWt?: number;
  driedWt?: number;
  suspendedWt?: number;
}
