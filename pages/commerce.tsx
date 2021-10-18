import { FunctionComponent } from "react";
import Image from "next/image"
import ComingSoon from "@components/comingSoon";

const Commerce:FunctionComponent = () => {

    return (
        <>
            <ComingSoon/>
            <Image src={"/commerceDemo.png"} width={1440} height={2324} />
        </>
    );

}

export default Commerce;