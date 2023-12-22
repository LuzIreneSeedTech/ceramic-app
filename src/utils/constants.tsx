export const properties = [
  { propName: "physical props" },
  { propName: "chemical props" },
];

export const physChemProps = [
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

// Interface
export interface physChemPropsType {
  physPropName?: string;
}

export interface propertiesType {
  propName: string;
}

export interface physChemImgType {
  imgUrl: string;
  physPropChoice: string;
}
