const ErrorMessage = ({ error }: { error: string | undefined }) => {
    return <span className="p-1 text-left text-red-500">{error}</span>;
};

export default ErrorMessage;
