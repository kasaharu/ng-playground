import { ReactiveFormsModule } from '@angular/forms';
import { render, screen } from '@testing-library/angular';
import { User } from '../../../../domain/user';
import { createMockUser } from '../../../../testing/factories';
import { UserEditorFormComponent } from './user-editor-form.component';

describe('UserEditorFormComponent', () => {
  describe('should render', () => {
    it('name が表示されていること', async () => {
      const name = 'taro';
      const user: User = createMockUser({ name });
      const expected = name;

      await render(UserEditorFormComponent, { imports: [ReactiveFormsModule], componentProperties: { user } });

      expect(screen.getByDisplayValue(expected));
    });

    it('username が表示されていること', async () => {
      const username = 'taro123';
      const user: User = createMockUser({ username });
      const expected = username;

      await render(UserEditorFormComponent, { imports: [ReactiveFormsModule], componentProperties: { user } });

      expect(screen.getByDisplayValue(expected));
    });

    it('email が表示されていること', async () => {
      const email = 'taro@email.com';
      const user: User = createMockUser({ email });
      const expected = email;

      await render(UserEditorFormComponent, { imports: [ReactiveFormsModule], componentProperties: { user } });

      expect(screen.getByDisplayValue(expected));
    });

    it('website が表示されていること', async () => {
      const website = 'taro.co.jp';
      const user: User = createMockUser({ website });
      const expected = website;

      await render(UserEditorFormComponent, { imports: [ReactiveFormsModule], componentProperties: { user } });

      expect(screen.getByDisplayValue(expected));
    });
  });
});
