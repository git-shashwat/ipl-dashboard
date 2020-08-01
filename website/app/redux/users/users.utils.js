export const getUsersFCMTokens = (users) => {
    const tokens = [];
    users.forEach(({ record: { userToken } }) => {
        if (userToken !== '') {
            tokens.push(userToken);
        }
    });
    return tokens;
} 