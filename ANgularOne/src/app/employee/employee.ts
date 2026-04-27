import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
}

@Component({
  selector: 'app-employee',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class EmployeeComponent {
  employees = signal<Employee[]>([
    { id: 1, name: 'Alice Johnson',  role: 'Software Engineer',  department: 'Engineering', email: 'alice@example.com' },
    { id: 2, name: 'Bob Martinez',   role: 'Product Manager',    department: 'Product',     email: 'bob@example.com' },
    { id: 3, name: 'Carol Williams', role: 'UX Designer',        department: 'Design',      email: 'carol@example.com' },
    { id: 4, name: 'David Kim',      role: 'QA Engineer',        department: 'Engineering', email: 'david@example.com' },
    { id: 5, name: 'Eva Patel',      role: 'HR Specialist',      department: 'Human Resources', email: 'eva@example.com' },
  ]);

  showForm = signal(false);

  addForm: FormGroup;

  private nextId = 6;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      name:       ['', [Validators.required, Validators.minLength(2)]],
      role:       ['', Validators.required],
      department: ['', Validators.required],
      email:      ['', [Validators.required, Validators.email]],
    });
  }

  toggleForm(): void {
    this.showForm.update(v => !v);
    if (!this.showForm()) {
      this.addForm.reset();
    }
  }

  onSubmit(): void {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }

    const { name, role, department, email } = this.addForm.value as Omit<Employee, 'id'>;
    const newEmployee: Employee = { id: this.nextId++, name, role, department, email };

    this.employees.update(list => [...list, newEmployee]);
    this.addForm.reset();
    this.showForm.set(false);
  }

  fieldError(field: string, error: string): boolean {
    const ctrl = this.addForm.get(field);
    return !!(ctrl && ctrl.touched && ctrl.hasError(error));
  }
}
