
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center space-y-2 my-10 md: w-3/12 mx-auto">
            <p className="text-amber-600 text-lg">{subHeading}</p>
            <h3 className="text-3xl border-y-2 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;