export default function generateRandomString(length: number) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 {}[]\'#~@;:,.<>?/\\-_=+()*&^%$£"!¬`';
  
    for (let i = 0; i < length; i += 1)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}
