import { render, screen } from '@testing-library/angular';
import { PageTitleComponent } from './page-title.component';

describe('PageTitleComponent', () => {
  it('should render', async () => {
    const expected = 'title';
    await render(PageTitleComponent, { componentProperties: { title: expected } });

    expect(screen.getByText(expected));
  });
});
