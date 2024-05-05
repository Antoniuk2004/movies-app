import CommentsSectionLayout from "./CommentsSectionLayout";

type CommentsSectionProps = {
    isMobile: boolean;
}

const CommentsSection = (props: CommentsSectionProps) => {
    const {isMobile} = props;

    return (
        <CommentsSectionLayout isMobile={isMobile}>
            <span className={"mt-4"}>Coming soon</span>
        </CommentsSectionLayout>
    )
}

export default CommentsSection;