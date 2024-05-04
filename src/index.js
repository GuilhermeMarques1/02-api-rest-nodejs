function calculateAgeOfUsers(user) {
    return new Date().getFullYear() - user.birthYear;
}
// calculateAgeOfUsers("guilherme");
// calculateAgeOfUsers({});
console.log(calculateAgeOfUsers({
    birthYear: 2000,
}));
