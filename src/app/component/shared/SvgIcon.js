import Image from "next/image";

const SvgIcon = ({ classes, src, width, height }) => {
    classes ??= "";
    return (
        <div className={classes + " svg-container"}>
            <Image
                src={src}
                // style={{ width: width + "px !important", height: height + "px !important" }}
                // fill={true}
                width={width}
                height={height}
                className={"svg"}
            />
        </div>
    );
};

export default SvgIcon;
