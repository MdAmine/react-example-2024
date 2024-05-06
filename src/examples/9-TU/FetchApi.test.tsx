import { act, render, screen } from "@testing-library/react";
import FetchApi from "./FetchApi";

test('Fetch Api TU', async () => {
  window.fetch = jest.fn();
  window.fetch.mockResolvedValueOnce({
    json: async () => [
      {
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        id: 2,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
      },
    ],
  });
  render(<FetchApi />);

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  expect(screen.getAllByRole("heading", { level: 3 })).not.toHaveLength(0);
  expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
});
