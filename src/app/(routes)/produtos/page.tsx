"use client"

import ButtonComponent from "@/components/button";
import BuyIcon from "../../../../public/icons/comprar";

const Page = () => {
  return (
    <div>
      <ButtonComponent
        variant="primary"
        icon={BuyIcon}
      >
        comprar
      </ButtonComponent>
    </div>
  );
};

export default Page;