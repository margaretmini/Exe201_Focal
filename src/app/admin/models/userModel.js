export default class User {
    constructor(firstName, lastName, email, phone, address, dateOfBirth) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phone = phone;
      this.address = address;
      this.dateOfBirth = dateOfBirth;
    }
  
    // Bạn có thể thêm các phương thức trong model nếu cần
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }