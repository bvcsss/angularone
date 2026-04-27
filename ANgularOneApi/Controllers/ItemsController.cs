using Microsoft.AspNetCore.Mvc;
using ANgularOneApi.Models;

namespace ANgularOneApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ItemsController : ControllerBase
{
    // In-memory store shared across requests for this simple demo.
    private static readonly List<Item> _items = new()
    {
        new Item { Id = 1, Name = "Item One" },
        new Item { Id = 2, Name = "Item Two" },
        new Item { Id = 3, Name = "Item Three" },
    };

    // GET /api/items
    [HttpGet]
    public ActionResult<IEnumerable<Item>> GetAll()
    {
        return Ok(_items);
    }

    // GET /api/items/{id}
    [HttpGet("{id:int}")]
    public ActionResult<Item> GetById(int id)
    {
        var item = _items.FirstOrDefault(i => i.Id == id);
        if (item is null)
            return NotFound(new { message = $"Item with id {id} was not found." });

        return Ok(item);
    }

    // POST /api/items
    [HttpPost]
    public ActionResult<Item> Create([FromBody] CreateItemRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Name))
            return BadRequest(new { message = "Name is required." });

        var newItem = new Item
        {
            Id = _items.Count > 0 ? _items.Max(i => i.Id) + 1 : 1,
            Name = request.Name.Trim()
        };

        _items.Add(newItem);

        return CreatedAtAction(nameof(GetById), new { id = newItem.Id }, newItem);
    }
}

/// <summary>Request body for POST /api/items.</summary>
public record CreateItemRequest(string Name);
