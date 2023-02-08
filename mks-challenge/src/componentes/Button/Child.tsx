import React, { useContext} from "react";

import { MyContext } from "../../ProdutosContext";

const Child: React.FC = () => {
  const context = useContext(MyContext);

  if (context === undefined) {
    throw new Error("Context não foi fornecido");
  }

  return (
    <div>
      
      <button onClick={context.toggleFunction}>
        Mudar propriedade2
      </button>
    </div>
  );
};


export default Child