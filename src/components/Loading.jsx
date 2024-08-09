/**
 * Loading.jsx
 *
 * This component renders a simple loading indicator while data is being fetched.
 *
 * Responsibilities:
 * - Display a loading message or spinner during the data fetching process.
 *
 * Author: Pratham Shroff, pshroff@bu.edu
 */

import styled from 'styled-components';

const LoadingWrapper = styled.div`
    text-align: center;
    margin-top: 20px;
`;

export default function Loading() {
    return (
        <LoadingWrapper>
            <p>Loading...</p>
        </LoadingWrapper>
    );
}
