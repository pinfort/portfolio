export default function getFaClassName(key) {
    const use_fas = [
        'envelope',
    ];
    if (use_fas.includes(key)) {
        return 'fas fa-' + key;
    } else {
        return 'fab fa-' + key;
    }
}
