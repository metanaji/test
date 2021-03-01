import styled from 'styled-components';

const ErrorWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
const H1 = styled.h1`
  color:#a62c2b;
`;

export default function ErrorPage() {
    return (
        <>
            <ErrorWrapper>
                <div>
                    <H1>Something went Wrong!!!</H1>
                    Please try refreshing the page or <a href={"/"}>Click Here</a>
                </div>
            </ErrorWrapper>
        </>
    )
}