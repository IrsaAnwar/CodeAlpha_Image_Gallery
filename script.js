function Group(groupName) {
    const groups = document.querySelectorAll('.image-group');
    groups.forEach(group => group.style.display = 'none');
    const activeGroup = document.getElementById(groupName);
    if (activeGroup) {
        activeGroup.style.display = 'flex';
    }
}


